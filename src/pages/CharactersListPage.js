import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CharactersListPage.css';

const charactersList1 = ['Achilles', 'Agamemnon', 'Ajas', 'Bryzeida', 'Dedal',];

const charactersList2 = ['Diomedes',  'Hektor', 'Helena', 'Jazon', 'Menelaos',];

const charactersList3 = ['Odyseusz', 'Parys', 'Patroklos', 'Telegonos', 'Telemach',];

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
            <p className='infoP'>Wszelkie informacje o bogach i postaciach zaczerpnięta z książek autorstwa Madeline Miller.</p>
        </div>
     );
}
 
export default CharactersListPage;