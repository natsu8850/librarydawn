import { useRef, useState } from "react";
import styled from "styled-components"
import DisplayBooks from "./DisplayBooks";

function ManageBooksDash() {

    const [books, setBooks] = useState([
        {
            name: 'harry potter'
        },
        {
            name: 'harry potter 2'
        }
    ])

    //NEW Book
    const [newBook, setNewBook] = useState({
        name: '',
        accessionNumber: '',
        authors: [],
        edition: 'First',
        publisherName: '',
        year: '',
    });

    const [newAuthors, setNewAuthors] = useState([]);

    const [showAddBook, setShowAddBook] = useState(true);

    function toggleAccordion() {
        setActive(!active);
        setHeight(active === true ? '0px' : `${refContent.current.scrollHeight}px`);
    }

    function handleAddBook() {
        setBooks(oldArray => [...oldArray, newBook]);
        setNewBook({
            name: '',
            accessionNumber: '',
            authors: [],
            edition: 'First',
            publisherName: '',
            year: '',
        })
    }

    const [isConfirmation, setIsConfirmation] = useState(false);

    const refContent = useRef(null);

    const [active, setActive] = useState(false);

    const [height, setHeight] = useState('0px');
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <Wrapper>
            <HeadingAndButton>
                <h1>Books</h1>
                <button onClick={toggleAccordion}>Add book</button>
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
                                value={newBook.name}
                                onChange={(e) => { setNewBook({ ...newBook, name: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Accession Number
                            </Label>
                            <Field
                                type='text'
                                value={newBook.accessionNumber}
                                onChange={(e) => { setNewBook({ ...newBook, accessionNumber: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Year
                            </Label>
                            <Field
                                type='text'
                                value={newBook.year}
                                onChange={(e) => { setNewBook({ ...newBook, year: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Publisher Name
                            </Label>
                            <Field
                                type='text'
                                value={newBook.publisherName}
                                onChange={(e) => { setNewBook({ ...newBook, publisherName: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Edition
                            </Label>
                            <Field
                                type='text'
                                value={newBook.edition}
                                onChange={(e) => { setNewBook({ ...newBook, publisherName: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
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
                        </FieldContainer>
                        {/* <FieldContainer>
                            <Label>
                                Author Name
                            </Label>
                            <Field
                                type='text'
                                value={newBook.authors[1]}
                                onChange={(e) => {
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