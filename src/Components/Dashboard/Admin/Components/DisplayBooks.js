import styled from "styled-components"
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa"
import { useRef, useState } from "react";

function DisplayBooks({ book }) {

    function toggleAccordion() {
        setActive(!active);
        setHeight(active === true ? '0px' : `${refContent.current.scrollHeight}px`);
    }

    const [isConfirmation, setIsConfirmation] = useState(false);

    const refContent = useRef(null);

    const [active, setActive] = useState(false);

    const [height, setHeight] = useState('0px');
    const [isDisabled, setIsDisabled] = useState(false);


    function deleteBook() {
        toggleAccordion();
        setIsDisabled(true);
    }

    return (
        <Wrapper>
            <BeforeExpand onClick={toggleAccordion} disabled={isDisabled}>
                <Fields>
                    <strong>Book Name: </strong>{book.name}
                </Fields>
                {active ?
                    <FaChevronCircleUp />
                    : <FaChevronCircleDown />
                }
            </BeforeExpand>
            <AccordionContent ref={refContent} style={{ maxHeight: `${height}` }}>
                <AccordionDivider active={active} />
                <Fields>
                    <strong>Name: </strong> {book.name}
                </Fields>
                <Fields>
                    <strong>Accession Number: </strong> {book.accessionNumber}
                </Fields>
                <Fields>
                    <strong>Edition: </strong> {book.edition}
                </Fields>
                <Fields>
                    <strong>Publisher Name: </strong> {book.publisherName}
                </Fields>
                <Fields>
                    <strong>Year: </strong> {book.year}
                </Fields>
                <DeleteButton>
                    <Confirmation visibility={isConfirmation}>
                        Are you sure to delete?
                        <SureToProceedButton bgColor='#25AE32' onClick={deleteBook}>Yes</SureToProceedButton>
                        <SureToProceedButton bgColor='#D0111F' onClick={() => setIsConfirmation(false)}>No</SureToProceedButton>
                    </Confirmation>
                    <VerifyButtonButton visibility={isConfirmation} onClick={() => setIsConfirmation(true)}>Delete</VerifyButtonButton>
                </DeleteButton>
            </AccordionContent>
        </Wrapper>
    )
}

export default DisplayBooks


const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    margin: 20px 0;
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const BeforeExpand = styled.button`
    display: flex;
    flex-grow: 1;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: white;
`


const Fields = styled.div`
    font-weight: 300;
    font-size: 17px;
    word-wrap: break-word;
    strong{
        font-weight: 500;
    }
`

const AccordionContent = styled.div`
    overflow: hidden;
    transition: all 200ms ease-in-out;
`
const AccordionDivider = styled.hr`
    background-color: #eee;
    border: none;
    height: 0.5px;
    margin: 10px 0;
`

const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const VerifyButtonButton = styled.button`
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
        visibility: ${props => props.visibility ? 'hidden' : 'visible'};
        display:  ${props => props.visibility ? 'none' : 'inline-block'};;
`


const Confirmation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${props => props.visibility ? 'visible' : 'hidden'};
    display:  ${props => props.visibility ? 'inline-block' : 'none'};;
`

const SureToProceedButton = styled.button`
        font-size: 13px;
        padding: 0px 10px;
        cursor: pointer;
        outline: none;
        border: none;
        background: ${props => props.bgColor};
        color: white;
        border-radius: 2px;
        margin: 0 5px;
        &:hover{
            opacity: 0.8;
        }
`