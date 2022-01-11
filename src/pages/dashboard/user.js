import styled from "styled-components"
import UserDashboard from "../../Components/Dashboard/User/Dashboard"

function user() {
    return (
        <Wrapper>
            <UserDashboard />
        </Wrapper>
    )
}

export default user

const Wrapper = styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 35% 65%;
    background-color: #eee;
    position: relative;
`