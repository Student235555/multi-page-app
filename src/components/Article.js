import React from 'react';
import '../styles/Article.css';

const Article = ({title, source, text}) => {

    return ( 
        <article>
            <h3 className='h3Art'>{title}</h3>
            <p className='pArt'>{text}</p>
            <a href={source}  target="blank"><span className='spanArt'>{source}</span></a>
        </article>
     );
}
 
export default Article;