import styled from "styled-components";

function Header() {
    return (
        <Wrapper>
            <nav className="navbar">
                <div className="inner-width">
                    <img src="/images/logo.png" className="logo" style={{ borderRadius: '50%' }}></img>
                    <button className="menu-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navbar-menu">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Service</a>
                        <a href="#contact">Contact</a>
                        {/* <a href='/login'>Login</a> */}

                    </div>
                </div>
            </nav>

        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
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


`
