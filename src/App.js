import React from 'react'

import {Blog, Footer, Possibility, Features, Web3, Header} from './containers';
import {CTA, Brand, Navbar} from './components';

const App = () => {
    return (
        <div classname="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Web3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>

    )
}

export default App