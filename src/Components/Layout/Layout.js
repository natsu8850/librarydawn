import { Children } from "react"
import styled from "styled-components"
import Header from "../Header"

function Layout({ children }) {
    return (
        <Wrapper>
            <Header />
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Layout

const Container = styled.div`

`

const Wrapper = styled.div`
    width: 100%;
`