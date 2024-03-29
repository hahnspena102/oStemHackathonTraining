import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <div className="topNav">
            <div className="topLeft"> </div>
            <div className="topCenter"> 
            <ul className="topNavList">
                <li className="navListItem Home">
                    <Link className="link" to="/">
                        Home
                    </Link>
                </li>
                <li className="navListItem About">
                        About
                </li>
                <li className="navListItem Contact">
                        Contact
                </li>
                <li className="navListItem Post">
                    <Link className="link" to="/write">
                        Write
                    </Link>
                </li>
                <li className="navListItem Logout">
                    Logout
                </li>
            
            </ul>
            
            </div>

            <div className="topRight"> 
            <img className="topPfpImg" src="/images/default_pfp.png"alt="images/alt_pfp.png"></img>

            <ul>
                <li className="navListItem Logout">
                    <Link className="link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="navListItem CreateAccount">
                    <Link className="link" to="/createAccount">
                        Create Account
                    </Link>
                </li>
            </ul>


            </div>

            
        </div>
    )
}