import React from 'react'
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Navbar = () => {
    return (
        <div className="web3__navbar">
            <div className="web3__navbar-links">
                <div className="web3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                 </div>
                 <div className="web3__navbar-links_container">
                    <p> <a href="#home"> Home </a></p>
                    <p> <a href="#web3"> What is Web3? </a></p>
                    <p> <a href="#possibility"> Open AI </a></p>
                    <p> <a href="#features"> CaseStudies </a></p>
                    <p> <a href="#blog"> Library </a></p>
                 </div>
            </div>
            Navbar
        </div>
    )
}

export default Navbar
