import { useState } from "react"
import styled from "styled-components"

function ToggleSwitch() {

    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <Switch>
            <button
                className={`${isAdmin ? "hide" : "show"}`}
                onClick={(e) => {
                    e.preventDefault()
                    setIsAdmin(false);
                }}>
                ADMIN
            </button>
            <button
                className={`${isAdmin ? "show" : "hide"}`}
                onClick={(e) => {
                    e.preventDefault()
                    setIsAdmin(true);
                }}>
                USER
            </button>
        </Switch>
    )
}

export default ToggleSwitch


const Switch = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 4rem;
    margin: 5px 0 20px 0;
    button{
        padding: 20px;
        transition: 200ms ease-in-out all;
        cursor: pointer;
        color: white;
        font-size: 20px;
        font-weight: 600;
    }

    .show{
        background-color: black;
    }
    .hide{
        background-color: turquoise;
    }
`