import Script from "next/script";
import { useState } from "react";
import styled from "styled-components"
import Layout from "../Components/Layout/Layout";


function Login() {

	const [email, setEmail] = useState();
	const [userId, setUserId] = useState();
	const [password, setPassword] = useState();
	const [passwordShown, setPasswordShown] = useState(false);
	const [showLoginErrorModal, setShowLoginErrorModal] = useState(false);
	const [isAdmin, setIsAdmin] = useState(true);

	async function handleShowPassword() {
		setPasswordShown(!passwordShown);
	}

	return (
		<Layout>
			<Wrapper>
				<section id="home" style={{ backgroundImage: 'url(#)' }} >
					<div className="inner-width">
						<div className="content">
							<h1></h1>
							<div className="buttons">
								<a href="#">Contact</a>
							</div>
						</div>
					</div>
				</section>

				<section id="about">
					<div className="inner-width">
						<h1 className="section-title">About</h1>
						<div className="about-content">
							<div className="about-text">
								<h2 style={{ color: 'white' }}>Hi, We are here to help you</h2>
								<h3 style={{ color: 'white' }}>
									<span>Administrator</span>
									<span>Librarian</span>
									<span>Support Staff</span>
								</h3>
								<p style={{ color: 'white' }}>
									To fulfil the growing need for improved data and record management and services, we can
									tap into the power of the internet and its vast network, which allows individuals to
									help one another with a single click from their phone. The Library Management system
									seeks to provide an online platform to maintain the record of the library.

								</p>
								<br />
								<br />
							</div>
						</div>
					</div>
				</section>

				<section id="services" className="servicebar">
					<div className="inner-width">
						<h1 className="section-title">Services</h1>
						<div className="services">
							<div className="service">
								<h4>Uses</h4>
								<br />
								<br />
								<p>This system will reduce all the manual work and the whole process can be managed just through
									single clicks and edits.</p>
							</div>
							<div className="service">
								<h4>Our Work</h4>
								<br />
								<br />
								<p>It is the most proficient and easy to use system for managing all the processes involved in a
									Library in the most effective ways.</p>
							</div>
							<div className="service">
								<h4>Motive</h4>
								<br />
								<br />
								<p>There will be no headache and doubtfulness of storing the data securely and searching the records
									of any individual afterward.</p>
							</div>
							<div className="service">
								<h4>Database Management</h4>
								<br />
								<br />
								<p>Managed by high skill employees</p>
							</div>
							<div className="service">
								<h4>Output</h4>
								<br />
								<br />
								<p>Allows admins to update the database and accordingly and the users to access the records without
									altering them.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="contact">
					<div className="inner-width">
						<h1 className="section-title">Contact</h1>
						<div className="contact-info">
							<div className="item">
								<ion-icon name="phone-portrait-outline"></ion-icon>
								+91 8877556633
							</div>
							<div className="item">
								<ion-icon name="pencil-outline"></ion-icon>
								haneul@gamil.com
							</div>
							<div className="item">
								<ion-icon name="location-outline"></ion-icon>
								India
							</div>
						</div>

						<form action="" method="post" className="contact-form">
							<input type="text" className="name" placeholder="Your Full Name" required />
							<input type="text" className="email" placeholder="Email" required />
							<input type="text" className="subject" placeholder="Subject" required />
							<textarea className="message" placeholder="Message" required></textarea>
							<input type="submit" value="Send Message" className="btn" />

						</form>
					</div>
				</section>
			</Wrapper >
		</Layout>

	)
}

export default Login


const Wrapper = styled.div`

* {
		padding: 0;
		margin: 0;
		text-decoration: none;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	::selection {
		background-color: #FFCD00;
	}

	::-webkit-scrollbar {
		width: 10px;
		background-color: #FFDAC1;
	}

	::-webkit-scrollbar-thumb {
		background-color: #2f2f2f;
	}

	.navbar {
		position: fixed;
		background-color: transparent;
		width: 100%;
		padding: 30px 0;
		z-index: 999;
		transition: .3s linear;
	}

	.inner-width {
		max-width: 1300px;
		border-radius: 250px;
		margin: auto;
		padding: 0 40px;

	}

	.navbar .inner-width {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		width: 80px;
		background-size: contain;
	}

	.menu-toggler {
		background: none;
		width: 30px;
		border: none;
		cursor: pointer;
		position: relative;
		outline: none;
		z-index: 999;
		display: none;
	}

	.menu-toggler span {
		display: block;
		height: 3px;
		background-color: white;
		margin: 6px 0;
		position: relative;
		transition: .3s linear;

	}

	.navbar-menu a {
		color: white;
		font-size: 18px;
		font-weight: 500;
		margin-left: 30px;
		transition: .2s linear
	}

	.navbar-menu a:hover {
		color: #3d2c1f !important;
	}

	.sticky {
		background-color: white;
		padding: 18px 0;
	}

	.sticky .navbar-menu a {
		color: #1f253d;
	}

	.sticky .menu-toggler span {
		background-color: white;
	}

	#home {
		height: 100vh;
		min-height: 500px;
		background-size: cover;
		background-attachment: fixed;
	}

	#home .inner-width {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
	}

	#home .content {
		width: 100%;
		color: white;
	}

	#home .content h1 {
		font-size: 65px;
		margin-bottom: 60px;
		background-color: f1f1f1;
		width: 500px;
	}

	#home .content h1::after {
		content: " Hello we are Team haneul";
		animation: textanim 10s linear infinite;
	}

	@keyframes textanim {
		30% {
			content: " To make library management";
		}

		50% {
			content: "EASIER";
		}
	}

	#home .buttons {
		margin-top: 60;

	}

	#home .buttons a {
		display: inline-block;
		margin: 15px 30px;
		padding: 15px 30px;
		color: white;
		font-size: 20px;
		font-weight: 500;
		width: 180px;
		border: 1px solid;
		border-radius: 6px;
		transition: .2s linear;
	}

	#home .buttons a:hover,
	#home .buttons a:nth-child(2) {
		background-color: white;
		color: gray;
	}

	section {
		padding: 100px 0;
		background-color: #311903;
	}

	.section-title {
		text-align: center;
		margin-bottom: 80px;
		position: relative;
		font-size: 31px;
		padding-bottom: 20px;
		color: white;
	}

	.section-title::before {
		content: "";
		position: absolute;
		width: 80px;
		height: 3px;
		background-color: white;
		bottom: 0;
		left: calc(50% - 40px);

	}

	.about-content {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.about-pic {
		width: 200px;
		border-radius: 50%;
		margin-right: 100px;
	}

	.about-text {
		flex: 1;
	}

	.about-text h3 {
		margin: 10px 0;
		font-size: 21px;
	}

	.about-text h3 span:nth-child(1):after,
	.about-text h3 span:nth-child(2):after {
		content: "";
		width: 6px;
		height: 6px;
		background-color: white;
		display: inline-block;
		border-radius: 50%;
		margin: 0 14px;
	}

	.about-text p {
		font-size: 22px;
		text-align: justify;
		line-height: 26px;
		margin-top: 20px;
	}

	.skills {
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.skill {
		width: calc(50% - 20px);
		margin: 15px 0;
	}

	.skill-info {
		display: flex;
		justify-content: space-between;
	}

	.skill-bar {
		height: 3px;
		background-color: white;
		margin-top: 14px;
		position: relative;

	}

	.skill-bar::after {
		content: "";
		position: absolute;
		height: 6px;
		background-color: gray;
		width: 50%;
		bottom: 0;
	}

	.html:after {
		width: 90%;
	}

	.css3:after {
		width: 80%;
	}

	.photoshop:after {
		width: 80%;
	}

	.js:after {
		width: 80%;
	}

	.python:after {
		width: 100%;
	}

	.aftereffect:after {
		width: 80%;
	}

	section.servicebar {
		background-color: #848865;
	}

	section.servicebar .section-title {
		color: white;
	}

	.services {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.service {
		width: calc(33% - 20px);
		text-align: center;
		border: 1px solid white;
		border-radius: 6px;
		margin: 20px 0;
		padding: 40px 20px;
		color: white;
		cursor: pointer;
		transition: .3s linear;
	}

	.servie h4 {
		font-size: 16px;
		margin-bottom: 6px;
	}

	.service:hover {
		background-color: white;
	}

	.service ion-icon:hover {
		color: white;
	}

	.time-line,
	.works {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.block {
		width: calc(50% - 20px);
		background-color: #2F2F2F;
		border: 1px solid white;
		margin: 10px 0;
		padding: 30px;
		color: white;
		position: relative;

	}

	.block::before {
		content: "";
		position: absolute;
		width: 1px;
		height: 120%;
		background-color: #ddd;
		left: -20px;
		top: 50%;
		transform: translateY(-50%);
	}

	.block::after {
		content: "";
		position: absolute;
		width: 16px;
		height: 16px;
		background-color: white;
		left: -28px;
		top: 30px;
		border-radius: 50%;
	}

	.block h3 {
		font-size: 21px;
		margin: 10px 0;

	}

	.block p {
		font: size 20px;
	}


	.contact-info {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 60px;
	}

	.contact-info .item {
		width: calc(33% - 20px);
		height: 160px;
		background-color: #848865;
		border-radius: 3%;
		color: whitesmoke;
		text-align: center;
		cursor: pointer;
		transition: .3s linear;
	}

	.contact-info ion-icon {
		font-size: 45px;
		line-height: 120px;
		height: 100px;
	}

	.contact-info .item:hover {
		background-color: white,
	}

	.contact-form {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.contact-form input,
	.contact-form textarea {
		width: 100%;
		height: 50px;
		margin: 10px 0;
		background-color: #2f2f2f;
		border: none;
		outline: none;
		padding: 20px;
		border-radius: 4px;
		color: white;
	}

	.name,
	.email {
		max-width: calc(50% - 10px);

	}

	.message {
		min-height: 200px;
		resize: vertical;
	}

	.contact-form .btn {
		width: 180px;
		font-size: 16px;
		border: 2px solid white;
		padding: 0;
		margin-left: auto;
		cursor: pointer;
		transition: .3s linear;
	}

	.contact-form .btn:hover {
		background-color: white;
		color: white;
	}

	footer {
		background-color: #848865;
		color: white;
		padding: 80px 0;
		text-align: center;

	}

	.copyright {
		margin-bottom: 20px;
		font-size: 15px;
	}

	.copyright a {
		font-size: 16px;
		color: white;
		font-weight: 500;

	}

	.goTop {
		position: fixed;
		z-index: 999;
		bottom: 40px;
		right: 40px;
		width: 40px;
		height: 40px;
		background-color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		color: black;
		outline: none;
		display: none;
	}

	.goTop ion-icon {
		font-size: 35px;
	}

	@media screen and(max-width: 980px) {
		.menu-toggler {
			display: block;

		}

		.navbar-menu {
			position: fixed;
			height: 100vh;
			width: 100%;
			background-color: white;
			top: 0;
			right: -100%;
			max-width: 400px;
			padding: 80px 50px;
			transition: .3s linear;
		}

		.navbar-menu a {
			display: block;
			font-size: 35px;
			margin: 30px 0;

		}

		.sticky .navbar-menu {
			background-color: #848865;

		}

		.navbar-menu.active {
			right: 0;
		}

		.menu-toggler.active span:nth-child(1) {
			transform: rotate(-45deg);
			top: 4px;
		}

		.menu-toggler.active span:nth-child(2) {
			opacity: 0;
		}

		.menu-toggler.active span:nth-child(3) {
			transform: rotate(45deg);
			bottom: 14px;
		}

		.inner-width {
			max-width: 800px;
		}

		.about-pic {
			margin: .0 auto 60px;

		}

		.about-text {
			flex: 100%;
			text-align: center;
		}

		.service {
			width: calc(50% - 20px);
		}

		.block {
			width: calc(100% - 20px);
			margin-left: auto;
		}

		.work {
			width: calc(50% - 10px);
		}

		.content-info .item {
			width: 100%;
			margin: 10px 0;

		}
	}

	@media screen and(max-width: 600px) {
		.inner-width {
			padding: 0 20px;
		}

		.skill {
			width: 100%;
		}

		.service {
			width: 100%;
		}

		.work {
			width: 100%;
		}

		.name,
		.email {
			max-width: 100%;
		}
	}

`