import React from 'react';
import '../styles/Article.css';

const Article = ({title, source, text}) => {

    return ( 
        <article>
            <h3 className='h3Art'>{title}</h3>
            <span className='spanArt'>{source}</span>
            <p className='pArt'>{text}</p>
        </article>
     );
}
 
export default Article;