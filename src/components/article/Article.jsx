import React from 'react'
import './article.css'

const Article = ({imgUrl, date, title}) => (
    <div className="web3__blog-container__article">
        <div className="web3__blog-container__article-image">
            <img src={imgUrl} alt="blog"/>
        </div>
        <div className="web3__blog-container__article-content">
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <div>
                <p>Read Full Article</p>
            </div>
        </div>
    </div>
);


export default Article;
