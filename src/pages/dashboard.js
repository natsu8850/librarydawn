import { useContext } from "react";
import styled from "styled-components";
import AdminDashboardChild from "../Components/Dashboard/Admin/Dashboard";


function AdminDashBoard() {

    return (
        <Wrapper>
            <AdminDashboardChild />
            {/* <SideBar />
            <MainDashBoard /> */}
        </Wrapper>
    )

}

export default AdminDashBoard


const Wrapper = styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 35% 65%;
    background-color: #eee;
    position: relative;
`