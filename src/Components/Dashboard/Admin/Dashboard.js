import styled from "styled-components"
import { AiFillBook } from 'react-icons/ai'
import { useContext, useState } from "react";
import OptionsChild from "./Components/OptionsChild";
import ManageBooksDash from "./Components/ManageBooks";
import ManageIssuesDash from "./Components/ManageIssuesDash";
import { AuthContext } from "../../../Context/authContext/AuthContext";
import { logout } from "../../../Context/authContext/AuthActions";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function AdminDashboardChild() {

    const [currentIndex, setCurrentIndex] = useState(0);

    //Manage books
    //Manage borrowing
    const { isFetching, dispatch, user } = useContext(AuthContext);
    const router = useRouter();

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
                    <div onClick={() => {
                        dispatch(logout); router.push('/'); Cookies.set('user', JSON.stringify(null));
                    }}>
                        <div style={{ cursor: 'pointer' }}>
                            <AiFillBook style={{ fontSize: '40px' }} />
                            <h4>Logout</h4>
                        </div>
                    </div>
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