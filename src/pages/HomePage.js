import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Tytuł 1",
        source: "Źródło 1",
        text: "11111 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores commodi in harum est sequi temporibus quis rerum, unde corrupti consequuntur dolor architecto dignissimos ducimus ut, impedit, enim neque blanditiis facilis?",
    },
    {
        id: 2,
        title: "Tytuł 2",
        source: "Źródło 2",
        text: "222222 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores commodi in harum est sequi temporibus quis rerum, unde corrupti consequuntur dolor architecto dignissimos ducimus ut, impedit, enim neque blanditiis facilis?",
    },
    {
        id: 3,
        title: "Tytuł 3",
        source: "Źródło 3",
        text: "333333 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores commodi in harum est sequi temporibus quis rerum, unde corrupti consequuntur dolor architecto dignissimos ducimus ut, impedit, enim neque blanditiis facilis?",
    }
]

const HomePage = () => {

    const artList = articles.map(item => (
        <Article key={articles.id} {...item}/>
    ))

    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;