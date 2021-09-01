import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CharactersListPage.css';

const charactersList1 = ['Achilles', 'Agamemnon', 'Ajas', 'Andromacha', 'Bryzeida',];

const charactersList2 = ['Dedal', 'Diomedes', 'Eneasz', 'Hektor', 'Helena',];

const charactersList3 = ['Jazon', 'Odyseusz', 'Parys', 'Telegonos', 'Telemach',];

const CharactersListPage = () => {

    const list1 = charactersList1.map(character => (
        <li key={character}>
            <Link to={`/character/${character}`}>{character}</Link>   
        </li>
    ))

    const list2 = charactersList2.map(character => (
        <li key={character}>
            <Link to={`/character/${character}`}>{character}</Link>   
        </li>
    ))

    const list3 = charactersList3.map(character => (
        <li key={character}>
            <Link to={`/character/${character}`}>{character}</Link>   
        </li>
    ))

    return ( 
        <div className="characters">
            <h2>Lista postaci</h2>
            <div className="charLists">
                <ul className='charList'>
                    {list1}
                </ul>
                <ul className='charList'>
                    {list2}
                </ul>
                <ul className='charList'>
                    {list3}
                </ul>
            </div>
        </div>
     );
}
 
export default CharactersListPage;