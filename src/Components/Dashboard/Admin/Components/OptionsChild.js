import styled from "styled-components"

function OptionsChild({ currentIndex, setCurrentIndex, children, index }) {

    function changeIndex() {
        setCurrentIndex(index);
    }

    return (
        <Wrapper onClick={changeIndex}>
            {children}
        </Wrapper>
    )
}

export default OptionsChild

const Wrapper = styled.div`
    padding: 20px 0;
    background-color: #eee;
    border-radius: 10px;
    display: grid;
    align-items: center;
    justify-content: center;
`