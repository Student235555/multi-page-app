import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CharactersListPage.css';

const characters = ['Achilles', 'Dedal', 'Odyseusz', 'Telegonos', 'Telemach',];

const CharactersListPage = () => {

    const list = characters.map(character => (
        <li key={character}>
            <Link to={`/character/${character}`}>{character}</Link>   
        </li>
    ))

    return ( 
        <div className="characters">
            <h2>Lista postaci</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
     );
}
 
export default CharactersListPage;