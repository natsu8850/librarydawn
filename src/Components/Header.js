import styled from "styled-components";

function Header() {
    return (
        <Wrapper>
            <Container>

                <Logo>
                    <img src='' />
                </Logo>
                <Options>
                    Login
                </Options>
            </Container>

        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Logo = styled.div`

`

const Options = styled.div`

`

const Container = styled.div`
    max-width: 1200px;
    display: flex;
    padding: 10px;
    width: 100%;
    justify-content: space-between;
`