import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GodsListPage.css';

const olympGods = ['Afrodyta', 'Apollo','Artemida', 'Atena', 'Hera', 'Hermes', 'Zeus'];
const titanGods = ['Ajetes', 'Helios', 'Kirke', 'Okeanos', 'Pazyfae', 'Prometeusz', 'Selene'];

const GodsListPage = () => {

    const olympList = olympGods.map(olymp => (
        <li key={olymp}>
            <Link to={`/god/${olymp}`}>{olymp}</Link> 
        </li>
    ))

    const titanList = titanGods.map(titan => (
        <li key={titan}>
            <Link to={`/god/${titan}`}>{titan}</Link> 
        </li>
    ))

    return ( 
        <div className='allGods'>
            <div className='olympGods'>
                <h2>Bogowie olimpijscy</h2>
                    <ul>
                        {olympList}
                    </ul>
            </div>

            <div className='titanGods'>
                <h2>Bogowie z pokolenia tytanów</h2>
                    <ul>
                        {titanList}
                    </ul>
            </div>
            <p className='infoP'>Wszelkie informacje o bogach i postaciach zaczerpnięte z książek autorstwa Madeline Miller.</p>
        </div>
     );
}
 
export default GodsListPage;