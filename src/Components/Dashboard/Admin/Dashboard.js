import styled from "styled-components"
import { AiFillBook } from 'react-icons/Ai'
import { useState } from "react";
import OptionsChild from "./Components/OptionsChild";
import ManageBooksDash from "./Components/ManageBooks";
import ManageIssuesDash from "./Components/ManageIssuesDash";

function AdminDashboardChild() {

    const [currentIndex, setCurrentIndex] = useState(0);

    //Manage books
    //Manage borrowing

    return (
        <>
            {/* SIDEBAR */}
            <SideBarWrapper>
                <h1>Manage Books</h1>
                <ManageBooks>
                    <OptionsChild index={0} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                        <div style={{ cursor: 'pointer' }}>
                            <AiFillBook style={{ fontSize: '40px' }} />
                            <h4>Manage Books</h4>
                        </div>
                    </OptionsChild>
                    <OptionsChild index={1} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                        <div style={{ cursor: 'pointer' }}>
                            <AiFillBook style={{ fontSize: '40px' }} />
                            <h4>Manage Issues</h4>
                        </div>
                    </OptionsChild>
                </ManageBooks>
            </SideBarWrapper>
            {/* DASHBOARd */}

            <DashboardWrapper>
                {currentIndex === 0 ? <ManageBooksDash />
                    : currentIndex === 1 ? <ManageIssuesDash /> : null
                }
            </DashboardWrapper>
        </>
    )
}

export default AdminDashboardChild


const SideBarWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    padding: 5%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`

const ManageBooks = styled.div`
    padding: 20px 30px;
    background-color: #eee;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto ;
    text-align: center;
    column-gap: 30px;
`

const DashboardWrapper = styled.div`
    width: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`