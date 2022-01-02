import React from 'react';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';
import './blog.css';

const Blog = () => (
    <div className="web3__blog section__padding" id="blog">
        <div className="web3__blog-heading">
            <h1 className="gradient__text">Latest released articles.</h1>
        </div>
        <div className="web3__blog-container">
            <div className="web3__blog-container__groupA">
                <Article imgUrl={blog01} date="Jan 04, 2022" title="Massa massa ultricies mi quis hendrerit. Elit at imperdiet dui accumsan sit."/>
            </div>
            <div className="web3__blog-container__groupB">
                <Article imgUrl={blog02} date="Jan 04, 2022" title="Massa massa ultricies mi quis hendrerit. Elit at imperdiet dui accumsan sit."/>
                <Article imgUrl={blog03} date="Jan 04, 2022" title="Massa massa ultricies mi quis hendrerit. Elit at imperdiet dui accumsan sit."/>
                <Article imgUrl={blog04} date="Jan 04, 2022" title="Massa massa ultricies mi quis hendrerit. Elit at imperdiet dui accumsan sit."/>
                <Article imgUrl={blog05} date="Jan 04, 2022" title="Massa massa ultricies mi quis hendrerit. Elit at imperdiet dui accumsan sit."/>
            </div>
        </div>
    </div>
);


export default Blog;
