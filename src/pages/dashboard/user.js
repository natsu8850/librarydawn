import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "styled-components"
import UserDashboard from "../../Components/Dashboard/User/Dashboard"
import { AuthContext } from "../../Context/authContext/AuthContext";

function User() {

    const { user } = useContext(AuthContext);
    const router = useRouter();


    if (!user || user.isLibrarian) {
        return (
            <LoggedInDiv>
                <h1>
                    You have to login as faculty
                </h1>
                <button onClick={() => { router.push('/login') }}>Click here to login</button>
            </LoggedInDiv>
        )
    }

    else {

        return (
            <Wrapper>
                <UserDashboard />
            </Wrapper>
        )
    }
}

export default User

const Wrapper = styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 35% 65%;
    background-color: #eee;
    position: relative;
`

const LoggedInDiv = styled.div`
  background: url('/images/book.jpg');
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;

  h1{
    font-size: 40px;
  }

  row-gap: 30px;

  button{
    padding: 5px 10px;
    cursor: pointer;
  }
`