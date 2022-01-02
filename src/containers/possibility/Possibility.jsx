import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => (
    <div className="web3__possibility section__pading" id="possibility">
        <div className="web3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="web3__possibility-content">
            <h4>Request early access to get started!</h4>
            <h1 className="gradient-text"> The possibilities are beyond your imagination</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h4> Request early access</h4>
        </div>
    </div>
);


export default Possibility;
