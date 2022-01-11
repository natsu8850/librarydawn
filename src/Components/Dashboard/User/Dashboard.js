import styled from "styled-components"
import { FaSearch } from 'react-icons/fa'
import { useState } from "react"
import { useRouter } from "next/router";

function UserDashboard() {

    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const search = () => {
        router.push({
            pathname: '/dashboard/user/search',
            query: {
                title: searchQuery
            }
        });
    }

    return (
        <Wrapper>
            <Header>
                <nav className="mainNav">
                    <div className="mainNav__logo">LIBRARY</div>
                    <div className="mainNav__links">
                        <a href="" className="mainNav__link">ISSUES</a>
                        <a href="" className="mainNav__link">PROFILE</a>
                        <a href="" className="mainNav__link">BOOKS</a>
                    </div>
                    <div className="mainNav__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g data-name="Layer 2" fill="#9197AE">
                                <g data-name="menu-2">
                                    <rect
                                        width="24"
                                        height="24"
                                        transform="rotate(180 12 12)"
                                        opacity="0"
                                    />
                                    <circle cx="4" cy="12" r="1" />
                                    <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
                                    <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
                                    <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </nav>
            </Header>
            <div className="wrapper">
                <div className="search-box">
                    <input type='text' className="input" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <div className="btn" onClick={search}>
                        <FaSearch />
                        {/* <i className="fa fa-search" aria-hidden="true"></i> */}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default UserDashboard

const Wrapper = styled.div`
    * {
        margin: 0;
        padding: 0;
        user-select: none;
    }

    body {
        background: #29313a;
    }

    .wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

     .search-box {
        width: 450px;
        height: 100px;
        position: relative;

        @media only screen and (max-width: 455px){
            width: 300px;
        }
    }

    .input {
        position: absolute;
        top: 20px;
        box-sizing: border-box;
        width: 100%;
        height: 63px;
        padding: 0 20px;
        outline: none;
        font-size: 18px;
        border-radius: 50px;
        color: #29313a;
        border: 3px solid rgb(49,25,3,0.7);
        transition: all 0.8s ease;
    }

    
    ::-webkit-input-placeholder {
        color: rgb(49,25,3,0.7);
    }
    ::-moz-placeholder {
        color:rgb(49,25,3,0.7);
    }
    :-ms-input-placeholder {
        color:rgb(49,25,3,0.7);
    }
    :-moz-placeholder {
        color:rgb(49,25,3,0.7);
    }

    .btn {
        position: absolute;
        width: 80px;
        height: 80px;
        background: rgb(49,25,3,1);
        border-radius: 50%;
        right: 0;
        top: 10px;
        cursor: pointer;
        text-align: center;
        line-height: 80px;
        font-size: 20px;
        color: #fff;
        transition: all 0.8s ease;
    }

    .input.active {
        width: 350px;
        right: 100px;
    }   

`
const Header = styled.div`
    width: 100%;

    a{
        text-decoration: none;
        color: black;
    }

    .mainNav {
        width: 100%;
        height: 80px;
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #9197ae;
        text-transform: uppercase;
        padding: 0 40px;
        @media only screen and (max-width: 799px) {
            padding: 0 20px;
        }

        &__logo {
            font-weight: 800;
            letter-spacing: 1px;
            font-size: 18px;
        }

            &__links {
                display: flex;
                @media only screen and (max-width: 799px) {
                    display: none;
                }
            }

        &__link {
            letter-spacing: 1px;
            font-size: 14px;
            margin-left: 20px;
            font-weight: 600;
            box-shadow: inset 0px -10px 0px rgba(white, 0.5);
            transition: all 0.4s ease, transform 0.2s ease;
            padding: 2px 4px;
            transform: translateY(0px); 
            
            &:hover {
                transform: translateY(-5px);
                box-shadow: inset 0px -20px 0px white; 
            }
        }

        &__icon {
            background-image: url('https://rafaelalucas91.github.io/assets/icons/black/icon-141.svg');
            width: 32px;
            height: 32px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            display: none;

            @media only screen and (max-width: 799px) {
                display: block;
            }
        }
    }   
`
