import React from 'react';
import { RiPsychotherapyLine } from 'react-icons/ri';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="web3__header section__padding" id="home">
            <div className="web3__header-content">
                <h1 className="gradient__text">Let's build with Web3</h1>
                <p>Web3 offers endless possibilities</p>

                <div className="web3__header-content__input">
                    <input type="email" placeholder="Your email address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="web3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>242 people requested access</p>
                </div>

                <div className="web3__header-image">
                    <img src={ai} alt="ai" />
                </div>
            </div>
        </div>
    )
}

export default Header
