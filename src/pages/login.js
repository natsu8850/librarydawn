import { useRouter } from "next/router";
import { useContext, useState } from "react";
import styled from "styled-components"
import Layout from "../Components/Layout/Layout"
import { loginSuccess } from "../Context/authContext/AuthActions";
import { AuthContext } from "../Context/authContext/AuthContext";
import { adminLoginApi, facLoginAPI } from "../utils/authenticationApi";




function Login() {

  function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";
    setTimeout(function () { document.querySelector('.cont_form_login').style.opacity = "1"; }, 400);
    setTimeout(function () {
      document.querySelector('.cont_form_sign_up').style.display = "none";
    }, 200);
  }
  function cambiar_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function () {
      document.querySelector('.cont_form_sign_up').style.opacity = "1";
    }, 100);

    setTimeout(function () {
      document.querySelector('.cont_form_login').style.display = "none";
    }, 400);


  }
  const [fId, setfId] = useState('');
  const [fEmail, setfEmail] = useState('');
  const [fPwd, setfPwd] = useState('');

  const [aId, setaId] = useState('');
  const [aEmail, setaEmail] = useState('');
  const [aPwd, setaPwd] = useState('');

  const { isFetching, dispatch, user } = useContext(AuthContext);

  const router = useRouter();

  async function adminLogin() {
    console.log('ADMIN LOGIN')
    const data = await adminLoginApi(dispatch);

    if (data === 'ERROR' || !data.isLibrarian) {
      alert('Something has gone wrong please try again!');
      return;
    }
    dispatch(loginSuccess(data));
  }

  async function facLogin() {
    console.log('FAC LOGIN')

    const data = await facLoginAPI(dispatch);

    if (data === 'ERROR' || data.isLibrarian) {
      alert('Something has gone wrong please try again!');
      return;
    }
    dispatch(loginSuccess(data));
  }

  if (user) {
    return (
      <Wrapper>
        <LoggedInDiv>
          <h1>
            YOU ARE ALREADY LOGGED IN AS {user.isLibrarian ? 'LIBRARIAN' : 'FACULTY'}
          </h1>
          <button onClick={() => { (user.isLibrarian) ? router.push('/dashboard/admin') : router.push('/dashboard/user') }}>Go to dashboard</button>
        </LoggedInDiv>
      </Wrapper>
    )
  }

  return (
    <Layout>
      <Wrapper>
        <div className="cont_principal" style={{ paddingTop: '5%' }} >
          <div className="cont_center" style={{ height: '200px' }} >

            <div className="cont_login" style={{ height: '100px' }} >
              <div className="cont_info_log_sign_up">
                <div className="col_md_login">
                  <div className="cont_ba_opcitiy">

                    <h2 style={{ fontSize: '30px' }}>LOGIN</h2>
                    <p>Administrator login</p>
                    <button className="btn_login"
                      onClick={cambiar_login}
                      style={{ fontSize: '25px' }}>login</button>
                  </div>
                </div>
                <div className="col_md_sign_up">
                  <div className="cont_ba_opcitiy">
                    <h2 style={{ fontSize: '30px' }}>LOGIN</h2>


                    <p>Faculty login</p>

                    <button className="btn_sign_up"
                      onClick={cambiar_sign_up}
                      style={{ fontSize: '25px' }}
                    >login</button>
                  </div>
                </div>
              </div>

              <div className="cont_back_info">
                <div className="cont_img_back_grey">
                  <img src="/images/book.jpg" />
                </div>

              </div>
              <div className="cont_forms">
                <div className="cont_img_back_">
                  <img src="/images/book.jpg" />
                </div>
                <div className="cont_form_login">
                  <h2>LOGIN</h2>
                  <input type="text" placeholder="Login ID" value={aId} onChange={(e) => { setaId(e.target.value) }} />
                  <input type="text" placeholder="Email" value={aEmail} onChange={(e) => { setaEmail(e.target.value) }} />
                  <input type="password" placeholder="Password" value={aPwd} onChange={(e) => { setaPwd(e.target.value) }} />
                  <button className="btn_login"
                    onClick={cambiar_login}
                  >
                    <a
                      style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }} onClick={adminLogin}>LOGIN</a></button>
                </div>

                <div className="cont_form_sign_up">
                  <h2>LOGIN</h2>
                  <input type="text" placeholder="Faculty ID" value={fId} onChange={(e) => { setfId(e.target.value) }} />
                  <input type="text" placeholder="Email" value={fEmail} onChange={(e) => { setfEmail(e.target.value) }} />
                  <input type="password" placeholder="Password" value={fPwd} onChange={(e) => { setfPwd(e.target.value) }} />
                  <button className="btn_sign_up"
                    onClick={cambiar_sign_up}
                  ><a
                    style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }} onClick={facLogin}>LOGIN</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout >
  )
}

export default Login

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


const Wrapper = styled.main`

* {
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  line-height: 30px;
}

html{
	scroll-behavior: smooth;
}
::selection{
	background-color:#FFCD00;
}
::-webkit-scrollbar{
	width:10px;
	background-color:#FFDAC1;
}
::-webkit-scrollbar-thumb{
	background-color:#2f2f2f;
}
.navbar{
	position:fixed;
    left: 0;
	background-color:rgb(49,25,3,0.7);
    width:100%;
	padding: 20px 0;
	z-index:999;
	transition: .3s linear;
}
/* #content{
  position:absolute;
  top:0px;
} */
.inner-width{
	max-width:1300px;
	border-radius: 250px;
	margin:auto;
	padding: 0 40px;
	
}
.navbar .inner-width{
	display:flex;
	align-items:center;
	justify-content:space-between;
}
.logo{
	width:80px;
	background-size:contain;
}
.menu-toggler{
	background:none;
	width:30px;
	border:none;
	cursor:pointer;
	position:relative;
	outline:none;
	z-index:999;
	display:none;
}
.menu-toggler span{
	display:block;
	height:3px;
	background-color:white;
	margin:6px 0 ;
	position:relative;
	transition: .3s linear;
	
}
.navbar-menu a{
	color:white;
	font-size:18px;
	font-weight:500;
	margin-left:30px;
  text-decoration: none;
	transition:.2s linear
}
.navbar-menu a:hover{
	color:#3d2c1f !important;
}
.sticky{
	background-color:white;
	padding:18px 0;
}
.sticky .navbar-menu a{
	color:#1f253d;
}
.sticky .menu-toggler span{
	background-color:white;
}
.cont_principal {
  position: absolute;
  width: 100%;
  height: 100%;     
background: url('/images/book.jpg');
background-size: cover;
background-attachment: fixed;
}


.cont_center {
  position: center;
  float: center;
   width: 100%;
}

.cont_login {
  position: relative;
  width: 640px;
left: 50%;
margin-left: -320px;
  
}

.cont_back_info {  
position: relative;
  float: left;
  width: 640px;
  height: 280px;
overflow: hidden;
  background-color: #fff;
  margin-top: 100px;
box-shadow: 1px 10px 30px -10px rgba(0,0,0,0.5);
}

.cont_forms {
  position: absolute;
  overflow: hidden;
  top:100px;
left: 0px;
  width: 320px;
  height: 280px;
  background-color: #eee;
-webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-ms-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
}

.cont_forms_active_login {
box-shadow: 1px 10px 30px -10px rgba(0,0,0,0.5);
  height: 550px;  
top:20px;
left: 0px;
  -webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-ms-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;

}

.cont_forms_active_sign_up {
box-shadow: 1px 10px 30px -10px rgba(0,0,0,0.5);
  height: 550px;  
top:20px;
left:320px;
-webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-ms-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
}

.cont_img_back_grey {
  position: absolute;
  width: 950px;
top:-80px;
  left: -116px;
}

.cont_img_back_grey > img {
  width: 100%;
 -webkit-filter: grayscale(100%);     filter: grayscale(100%);
opacity: 0.2;
animation-name: animar_fondo;
  animation-duration: 20s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: alternate;

}

.cont_img_back_ {
  position: absolute;
  width: 950px;
top:-80px;
  left: -116px;
}

.cont_img_back_ > img {
  width: 100%;
opacity: 0.3;
animation-name: animar_fondo;
animation-duration: 20s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: alternate;
}

.cont_forms_active_login > .cont_img_back_ {
top:0px;  
  -webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-ms-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
}

.cont_forms_active_sign_up > .cont_img_back_ {
top:0px;  
left: -435px;
  -webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-ms-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
}
 

.cont_info_log_sign_up {
position: absolute;
  width: 640px;
  height: 280px;
  top: 100px;
z-index: 1;
} 

.col_md_login {
  position: relative;
  float: left;
  width: 50%;
}

.col_md_login > h2 {
  font-weight: 400;
margin-top: 70px;
    color: #757575;
}

.col_md_login > p {
 font-weight: 400;
margin-top: 15px;
width: 80%;
    color: #37474F;
}

.btn_login { 
background-color: #49532f;
  border: none;
  padding: 10px;
width: 200px;
border-radius:3px;
box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
  color: #fff;
margin-top: 10px;
cursor: pointer;
}

.col_md_sign_up {
  position: relative;
  float: left;
  width: 50%;  
}

.cont_ba_opcitiy > h2 {
  font-weight: 400;
  color: #fff;
}

.cont_ba_opcitiy > p {
 font-weight: 400;
margin-top: 15px;
 color: #fff;
}

.cont_ba_opcitiy {
  position: relative;
  background-color: rgba(142, 172, 139, 0.55);
  width: 80%;
  border-radius:3px ;
margin-top: 60px;
padding: 15px 0px;
}

.btn_sign_up { 
background-color: #612e25;
  border: none;
  padding: 10px;
width: 200px;
border-radius:3px;
box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
  color: #fff;
margin-top: 10px;
cursor: pointer;
}
.cont_forms_active_sign_up {
z-index: 2;  
}

.cont_form_login {
  position: absolute;
  opacity: 0;
display: none;
  width: 320px;
  -webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-ms-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
}

.cont_forms_active_login {
z-index: 2;  
}
.cont_forms_active_login  >.cont_form_login {
}

.cont_form_sign_up {
  position: absolute;
  width: 320px;
float: left;
  opacity: 0;
display: none;
  -webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-ms-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
}

  
.cont_form_sign_up > input {
text-align: left;
  padding: 15px 5px;
margin-left: 10px;
margin-top: 20px;
  width: 260px;
border: none;
    color: #757575;
}

.cont_form_sign_up > h2 {
margin-top: 50px; 
font-weight: 400;
  color: #757575;
}


.cont_form_login > input {
  padding: 15px 5px;
margin-left: 10px;
margin-top: 20px;
  width: 260px;
border: none;
text-align: left;
  color: #757575;
}

.cont_form_login > h2 {
margin-top: 110px; 
font-weight: 400;
  color: #757575;
}


`