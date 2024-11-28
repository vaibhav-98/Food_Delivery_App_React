import { FaCartArrowDown } from "react-icons/fa";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
       const [login, setLogin] = useState()
       
    return (
        <div className="header"> 
           <div className="logo-container">
             <img className="logo" src = {LOGO_URL} />
           </div>
           <div className="nav-items"> 
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li>
                    <FaCartArrowDown/>
                </li>
                <button className="login" onClick={() => setLogin(!login)}>
                    {login ? "Logout" : "Login"}
                </button>
            </ul>
           </div>
        </div>
    );
};

export default Header;