import './Navbar.css';

function Navbar (){
    return (
        <>
            <div className='navbar-main-div'>
                <div className="brandlogo"><a href="#"> <img src="brand_logo.png" alt="" /> </a></div>
                <div className="actBtn">
                    <a className="menulinks" href="">MENU</a>
                    <a className="menulinks" href="">LOCATION</a>
                    <a className="menulinks" href="">ABOUT</a>
                    <a className="menulinks" href="">CONTACT</a>
                </div>
                <div className="loginBtn-div"><button className='loginBtn'>Login</button></div>
            </div>
        </>
    );
}

export default Navbar;