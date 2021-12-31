import { useRef, useState } from "react"
import styled from "styled-components";
import DisplayIssue from "./DisplayIssue";

function ManageIssuesDash() {

    const [issues, setIssues] = useState([
        {
            facultyId: '1234',
            bookName: 'Artificial Intelligence: A Modern Approach',
            accessionNumber: 'CSE/AI/001',
            issueDate: '30/12/2021',
            dueDate: '05/01/2022'
        },
        {
            facultyId: '5678',
            bookName: 'Basic Mechanical engineering',
            accessionNumber: 'CSE/Basics/011',
            issueDate: '17/12/2021',
            dueDate: '30/12/2021'
        }
    ])

    const [newIssue, setNewIssue] = useState({
        facultyId: '',
        bookName: '',
        accessionNumber: '',
        issueDate: '',
        dueDate: ''
    });

    const refContent = useRef(null);

    const [active, setActive] = useState(false);

    const [height, setHeight] = useState('0px');


    function handleAddBook() {
        setIssues(oldArray => [...oldArray, newIssue]);
        setNewIssue({
            facultyId: '',
            bookName: '',
            accessionNumber: '',
            issueDate: '',
            dueDate: ''
        })
    }

    function toggleAccordion() {
        setActive(!active);
        setHeight(active === true ? '0px' : `${refContent.current.scrollHeight}px`);
    }

    return (
        <Wrapper>
            <HeadingAndButton>
                <h1>Issues</h1>
                <button onClick={toggleAccordion}>Add Issue</button>
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
                                value={newIssue.bookName}
                                onChange={(e) => { setNewIssue({ ...newIssue, bookName: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Accession Number
                            </Label>
                            <Field
                                type='text'
                                value={newIssue.accessionNumbr}
                                onChange={(e) => { setNewBook({ ...newIssue, accessionNumber: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Faculty ID
                            </Label>
                            <Field
                                type='text'
                                value={newIssue.facultyId}
                                onChange={(e) => { setNewBook({ ...newIssue, facultyId: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Issue Date
                            </Label>
                            <Field
                                type='text'
                                value={newIssue.issueDate}
                                onChange={(e) => { setNewBook({ ...newIssue, issueDate: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Due Date
                            </Label>
                            <Field
                                type='text'
                                value={newIssue.dueDate}
                                onChange={(e) => { setNewBook({ ...newIssue, dueDate: e.target.value }); }}
                            />
                        </FieldContainer>

                    </FormContainer>
                    <AddButton onClick={handleAddBook}>Add book</AddButton>
                </AddBook>
            </AccordionContent>
            <Issues>
                {(issues.length > 0) ?
                    issues.map((issue) => (
                        <DisplayIssue key={issues.facultyId} issue={issue} />
                    ))
                    : null
                }
            </Issues>
        </Wrapper>
    )
}

export default ManageIssuesDash

const Wrapper = styled.div`
  p{
        color: red;
        margin-top: 5px;
        text-align: end;
        font-size: 15px;
    }
`

const Issues = styled.div`
    margin-top: 30px;
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