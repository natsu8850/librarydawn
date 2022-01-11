import styled from "styled-components"
import AdminDashboardChild from "../../Components/Dashboard/Admin/Dashboard"

function admin() {
    return (
        <Wrapper>
            <AdminDashboardChild />
        </Wrapper>
    )
}

export default admin

const Wrapper = styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 35% 65%;
    background-color: #eee;
    position: relative;
`