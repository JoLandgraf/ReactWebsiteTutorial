import React from 'react'
import web3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
    return (
        <div className="web3__footer section__padding">
            <div className="web3__footer-heading">
                <h1 className="gradient__text">Let's visit the future now!</h1>
            </div>

            <div className="web3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="web3__footer-links">
                <div className="web3__footer-links__logo">
                    <img src={web3Logo} alt="logo"></img>
                    <p>Frankfurter Weg 15, 52906 Neustadt</p>
                </div>

                <div className="web3__footer-links__div">
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Contact</p>
                    <p>Counter</p>
                </div>

                <div className="web3__footer-links__div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="web3__footer-links__div">
                    <h4>Get in touch</h4>
                    <p>Frankfurter Weg 15</p>
                    <p>52906 Neustadt</p>
                    <p>011 111 123</p>
                    <p>info@neustadt.net</p>
                </div>
            </div>
        <div className="web3__footer-copyright">
            <p>@2022. All rights reserved.</p>
        </div>

        
        </div>
    )
}

export default Footer
