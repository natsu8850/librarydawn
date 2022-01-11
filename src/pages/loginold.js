import Layout from "../Components/Layout/Layout"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import router from "next/router";
import ToggleSwitch from "../Components/ToggleSwitch";
import styled from "styled-components";

function LoginOld() {
    return (
        <Layout>
            <Wrapper>
                <LoginHead>
                    {/* {categoryName} */}
                    <Heading>
                        <h1>
                            Login
                        </h1>
                    </Heading>
                </LoginHead>

                <LoginForm>
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

                    <label htmlFor="username">Login Id</label>
                    <EmailField
                        type='text'
                        placeholder='Enter Id'
                        value={userId}
                        onChange={(e) => {
                            setUserId(e.target.value);
                        }}
                    >
                    </EmailField>
                    <label htmlFor="username">Email</label>
                    <EmailField
                        type='email'
                        aria-label='Email'
                        placeholder='example@example.com'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    >
                    </EmailField>
                    <label htmlFor="password">Password</label>
                    <PasswordDiv>
                        <PasswordField
                            id='password'
                            type={passwordShown ? "text" : "password"}
                            aria-label='Email'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        >
                        </PasswordField>
                        <ShowPassword onClick={handleShowPassword}>
                            <AiFillEye style={{ visibility: passwordShown ? 'visible' : 'hidden', display: passwordShown ? 'block' : 'none' }} />
                            <AiFillEyeInvisible style={{ visibility: passwordShown ? 'hidden' : 'visible', display: passwordShown ? 'none' : 'block' }} />
                        </ShowPassword>
                    </PasswordDiv>
                    <LoginButton onClick={() => {
                        router.push('/dashboard/admin')
                    }}>
                        Log In
                    </LoginButton>
                </LoginForm>

            </Wrapper>
        </Layout >
    )
}

export default LoginOld


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const LoginHead = styled.section`
    background: turquoise;
    color: black;
    width: 100%;
    /* background: linear-gradient(140deg, #13AD7D 0%, #2CDDA6  100%); */
    font-weight: 700;
    font-size: 60px;
    padding: 70px;
    text-align: center;
    font-size: 10rem;
    position: relative;
    @media only screen and (max-width:850px){
        font-size: 7rem;
    }
    @media only screen and (max-width:550px){
        font-size: 6rem;
    }
    @media only screen and (max-width:440px){
       font-size: 4rem;
    }
    @media only screen and (max-width:350px){
       font-size: 3rem;
       padding: 60px;

    }
    @media only screen and (max-width:300px){
        font-size: 2rem;
        padding: 40px;
    }
`
const Heading = styled.div`
    top: 130px;
    right: 30%;
    left: 30%;
    font-size: 50px;
    p{
        font-size: 20px;
        font-weight: 400;
    }
    @media only screen and (max-width:550px){
        top: 100px;
        right: 5%;
        left: 5%;
    }   
    @media only screen and (max-width:440px){
        top: 70px;
        right: 5%;
        left: 5%;
    }
    @media only screen and (max-width:350px){
        top: 40px;
    }
    @media only screen and (max-width:300px){
        top: 20px;
        font-size: 30px;
        p{
            font-size: 18px;
        }
    }
`


const LoginForm = styled.form`
    height: auto;
    width: 50%;
    margin: 50px 0;
    background-color: rgba(255,255,255,0.13);
    color: black;   
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.2);
    padding: 50px 40px;
    color: black;
    letter-spacing: 0.5px;
    outline: none;
    border: none;

    h3{
        font-size: 32px;
        font-weight: 500;
        line-height: 42px;
        text-align: center;
    }

    label{
        display: block;
        margin-top: 30px;
        font-size: 22px;
        font-weight: 500;
    }
`

const EmailField = styled.input`
    display: block;
    height: 60px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 15px;
    font-size: 17px;
    font-weight: 300;
    outline: none;
    color: black;
    border: 1px solid #080710;
`

const PasswordField = styled.input`
    display: block;
    height: 60px;
    width: 100%;
    background-color: transparent;
    font-size: 17px;
    font-weight: 300;
    outline: none;
    color: black;
`

const LoginButton = styled.div`
    margin-top: 20px;
    width: 100%;
    background-color: #080710;
    color: white;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
`

const PasswordDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: '60px';
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 15px;
    font-size: 17px;
    font-weight: 300;
    cursor: pointer;
    border: 1px solid #080710;

`
const ShowPassword = styled.div`
    font-size: 25px;
`

const Regsiter = styled.div`
    margin-top: 12px;
    text-align: end;
    font-weight: 300;
    font-size: 14px;
    a{
        font-weight: 500;
        text-decoration: underline;
        font-style: italic;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }
`

const CloseIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 30px;
    color: black;
`

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