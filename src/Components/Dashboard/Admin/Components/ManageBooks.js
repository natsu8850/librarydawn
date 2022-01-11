import axios from "axios";
import { useRef, useState } from "react";
import styled from "styled-components"
import { addBook, getAllBooks } from "../../../../utils/booksAPI";
import DisplayBooks from "./DisplayBooks";

function ManageBooksDash() {

    const [books, setBooks] = useState([]);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkxJQjEyMyIsImVtYWlsX3dvcmsiOiJhc2RmYWEiLCJpc0xpYnJhcmlhbiI6dHJ1ZSwiaWF0IjoxNjQxNzk0ODM2LCJleHAiOjE2NDQzODY4MzZ9.fcbGrNM5JPZajl_xZmNebjStOVgHSryWRUpy4Lp8cp4';

    //NEW Book
    const [newBook, setNewBook] = useState({
        title: '',
        acc_no: '',
        ref_no: '',
        edition_name: '',
        pub_year: ''
    });

    const [newAuthors, setNewAuthors] = useState([]);

    const [showAddBook, setShowAddBook] = useState(true);

    function toggleAccordion() {
        setActive(!active);
        setHeight(active === true ? '0px' : `${refContent.current.scrollHeight}px`);
    }

    const [isConfirmation, setIsConfirmation] = useState(false);

    const refContent = useRef(null);

    const [active, setActive] = useState(false);

    const [height, setHeight] = useState('0px');
    const [isDisabled, setIsDisabled] = useState(false);


    async function fetch() {
        const data = await getAllBooks();
        if (data === 'UNAUTHORIZED') {
            alert('You are not authorized, please login again.')
        }
        else if (data === 'NOT_ALLOWED') {
            alert('You are not allowed to perform this action!! Try logging in again')
        }
        else if (data === 'NOT_FOUND') {
            alert('Something went wrong, please try again, if the error presists contact IT team')
        }
        else {
            setBooks(data);
            console.log(books);
        }
    }

    async function handleAddBook() {

        if (!newBook.title || !newBook.acc_no || !newBook.ref_no || !newBook.pub_year || !newBook.edition_name) {
            alert("Please provide all the details")
            return;
        }

        const data = await addBook(token, newBook);

        console.log(data);

        if (data === 'MISSING_FIELDS') {
            alert("Please provide all the details")
            return;
        }

        else if (data.status === 404) {
            alert(data.msg)
            return;
        }

        else if (data.status === 409) {
            alert(data.msg)
            return;
        }

        else if (data.status === 500) {
            alert(data.msg)
            return;
        }

        else {
            alert('BOOK HAS BEEN ADDED TO DATABASE')

            setBooks(oldArray => [...oldArray, newBook]);
            setNewBook({
                title: '',
                acc_no: '',
                ref_no: '',
                edition_name: '',
                pub_year: ''
            })
        }
    }

    return (
        <Wrapper>
            <HeadingAndButton>
                <h1>Books</h1>
                <button onClick={toggleAccordion}>Add book</button>
                <button onClick={fetch}>
                    Update
                </button>
            </HeadingAndButton>
            <AccordionContent ref={refContent} style={{ maxHeight: `${height}` }}>
                <AddBook>
                    <FormContainer>
                        <FieldContainer>
                            <Label>
                                Book name
                            </Label>
                            <Field
                                type='text'
                                value={newBook.title}
                                onChange={(e) => { setNewBook({ ...newBook, title: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Accession Number
                            </Label>
                            <Field
                                type='text'
                                value={newBook.acc_no}
                                onChange={(e) => { setNewBook({ ...newBook, acc_no: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Year
                            </Label>
                            <Field
                                type='number'
                                value={newBook.pub_year}
                                onChange={(e) => { setNewBook({ ...newBook, pub_year: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Edition Name
                            </Label>
                            <Field
                                type='text'
                                value={newBook.edition_name}
                                onChange={(e) => { setNewBook({ ...newBook, edition_name: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Ref No
                            </Label>
                            <Field
                                type='text'
                                value={newBook.ref_no}
                                onChange={(e) => { setNewBook({ ...newBook, ref_no: e.target.value }); }}
                            />
                        </FieldContainer>
                        {/* <FieldContainer>
                            <Label>
                                Author Name
                            </Label>
                            <Field
                                type='text'
                                value={newBook.authors[0]}
                                onChange={(e) => {
                                    newAuthors[0] = e.target.value;
                                    console.log(newAuthors);
                                }}
                            />
                        </FieldContainer> */}
                    </FormContainer>
                    <AddButton onClick={handleAddBook}>Add book</AddButton>
                </AddBook>
            </AccordionContent>

            <Books>
                {(books.length > 0) ?
                    books.map((book) => (
                        <DisplayBooks key={book.name} book={book} />
                    ))
                    : null
                }
            </Books>
        </Wrapper >
    )
}

export default ManageBooksDash

const Wrapper = styled.div`
    p{
        color: red;
        margin-top: 5px;
        text-align: end;
        font-size: 15px;
    }
`

const HeadingAndButton = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 30px;
        font-weight: 500;
    }
    button{
        font-size: 20px;
        padding: 5px 20px;
        cursor: pointer;
        outline: none;
        border: none;
        background: black;
        color: white;
        border-radius: 5px;
        &:hover{
            opacity: 0.8;
        }
    }
`

const Books = styled.div`
    margin-top: 30px;
`

const AddBook = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 30px 20px;
    font-size: 15px;
    margin-top: 20px;
`

const AccordionContent = styled.div`
    overflow: hidden;
    transition: all 200ms ease-in-out;
    width: 100%;
`

const Label = styled.label`

`

const Field = styled.input`
    font-size: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    display: flex;
`

const FieldContainer = styled.div`
    display: grid;
    row-gap: 15px;
`

const FormContainer = styled.form`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px 40px;
`

const AddButton = styled.div`
        font-size: 20px;
        margin-top: 20px;
        padding: 10px 20px;
        cursor: pointer;
        outline: none;
        border: none;
        background: black;
        color: white;
        border-radius: 5px;
        text-align: center;
        &:hover{
            opacity: 0.8;
    }
`