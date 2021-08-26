import React from 'react';
import { Link } from 'react-router-dom';
import Character from '../components/Character'

const CharactersPage = ({match}) => {
    return ( 
        <>
            <div>Strona postaci</div>
            <Character id={match.params.id}/>
            <Link to="/characters">Powrót do listy postaci</Link>
        </>
     );
}
 
export default CharactersPage;