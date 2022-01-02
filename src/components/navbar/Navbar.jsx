import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
    <>
    <p> <a href="#home"> Home </a></p>
    <p> <a href="#wweb3"> What is Web3? </a></p>
    <p> <a href="#possibility"> Open AI </a></p>
    <p> <a href="#features"> CaseStudies </a></p>
    <p> <a href="#blog"> Library </a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="web3__navbar">
            <div className="web3__navbar-links">
                <div className="web3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                 </div>
                 <div className="web3__navbar-links_container">
                    <Menu />
                 </div>
            </div>
            <div className="web3__navbar-sign">
                <p> Sign in </p>
                <button type="button">Sign up</button>
            </div>
            <div className="web3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="web3__navbar-menu_container scale-up-center"> 
                        <div className="web3__navbar-menu_container-links">
                            <Menu />
                        </div>
                        <div className="web3__navbar-menu_container-links-sign">
                            <p> Sign in </p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div> 
        </div>
    );
};

export default Navbar
