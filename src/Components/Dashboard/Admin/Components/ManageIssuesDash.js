import { useRef, useState } from "react"
import styled from "styled-components";
import { addIssue, getAllIssues } from "../../../../utils/issuesAPI";
import DisplayIssue from "./DisplayIssue";

function ManageIssuesDash() {

    const [issues, setIssues] = useState([])

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkxJQjEyMyIsImVtYWlsX3dvcmsiOiJhc2RmYWEiLCJpc0xpYnJhcmlhbiI6dHJ1ZSwiaWF0IjoxNjQxNzk0ODM2LCJleHAiOjE2NDQzODY4MzZ9.fcbGrNM5JPZajl_xZmNebjStOVgHSryWRUpy4Lp8cp4';


    async function fetch() {
        const data = await getAllIssues(token);
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
            setIssues(data);
            console.log(issues);
        }
    }

    const [newIssue, setNewIssue] = useState({
        id: '',
        acc_no: '',
        date_issued: '',
        due_date: '',
        returned: false,
    });

    const refContent = useRef(null);

    const [active, setActive] = useState(false);

    const [height, setHeight] = useState('0px');


    async function handleAddIssue() {

        if (!newIssue.id || !newIssue.acc_no || !newIssue.date_issued || !newIssue.due_date) {
            alert("Please provide all the details")
            return;
        }

        const data = await addIssue(token, newIssue);


        if (data === 'MISSING_FIELDS') {
            alert("Please provide all the details")
            return;
        }

        if (data.status === 404) {
            alert(data.msg)
        }

        if (data.status === 500) {
            alert(data.msg)
        }

        console.log(data);

        setIssues(oldArray => [...oldArray, newIssue]);
        setNewIssue({
            id: '',
            acc_no: '',
            date_issued: '',
            due_date: '',
            returned: false,
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
                <button onClick={fetch}>
                    Update
                </button>
            </HeadingAndButton>
            <AccordionContent ref={refContent} style={{ maxHeight: `${height}` }}>
                <AddBook>
                    <FormContainer>
                        <FieldContainer>
                            <Label>
                                Accession Number
                            </Label>
                            <Field
                                type='text'
                                value={newIssue.acc_no}
                                onChange={(e) => { setNewIssue({ ...newIssue, acc_no: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Faculty ID
                            </Label>
                            <Field
                                type='text'
                                value={newIssue.id}
                                onChange={(e) => { setNewIssue({ ...newIssue, id: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Issue Date
                            </Label>
                            <Field
                                type='text'
                                value={newIssue.date_issued}
                                onChange={(e) => { setNewIssue({ ...newIssue, date_issued: e.target.value }); }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>
                                Due Date
                            </Label>
                            <Field
                                type='text'
                                value={newIssue.due_date}
                                onChange={(e) => { setNewIssue({ ...newIssue, due_date: e.target.value }); }}
                            />
                        </FieldContainer>

                    </FormContainer>
                    <AddButton onClick={handleAddIssue}>Add Issue</AddButton>
                </AddBook>
            </AccordionContent>
            <Issues>
                {
                    (issues.length > 0) ?
                        issues.map((issue) => (
                            <DisplayIssue key={issues.id} issue={issue} />
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