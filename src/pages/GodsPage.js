import React from 'react';
import { Link } from 'react-router-dom';
import God from '../components/God'

const GodsPage = ({match}) => {
    return ( 
        <>
        <div>Strona boga</div>
        <God id={match.params.id}/>
        <Link to="/gods">Powrót do listy bogów</Link>
    </>
     );
}
 
export default GodsPage;