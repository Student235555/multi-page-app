import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../styles/Header.css';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/header5.jpg';

const Header = () => {
    return ( 
        <>
            <Switch> {/*jeśli jakikolwiek Route po drodze jest prawdziwy to kończy jego działanie*/}
                <Route path='/' exact render= {() => (
                    <img src={img3} alt='Biblioteka'/>
                )}/>
                <Route path='/characters' render= {() => (
                    <img src={img1} alt='Biblioteka'/>
                )}/>
                <Route path='/events' render= {() => (
                    <img src={img2} alt='Biblioteka'/>
                )}/>
                <Route path='/contact' render= {() => (
                    <img src={img4} alt='Biblioteka'/>
                )}/>
                <Route render= {() => (
                    <img src={img5} alt='Biblioteka'/>
                )}/>
            </Switch>
        </>
     );
}
 
export default Header;
