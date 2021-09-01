import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../styles/Header.css';
import img1 from '../images/header3.jpg';
import img3 from '../images/header16.jpg';
import img4 from '../images/header8.jpg';
import img7 from '../images/header24.jpg';
import img8 from '../images/header25.jpg';

const Header = () => {
    return ( 
        <>
            <Switch> {/*jeśli jakikolwiek Route po drodze jest prawdziwy to kończy jego działanie*/}
                <Route path='/' exact render= {() => (
                    <img src={img7} alt='Rzeźby ścienne'/>
                )}/>
                <Route path='/characters' render= {() => (
                    <img src={img8} alt='Rzeźby ścienne'/>
                )}/>
                <Route path='/gods' render= {() => (
                    <img src={img3} alt='Posągi'/>
                )}/>
                <Route path='/contact' render= {() => (
                    <img src={img4} alt='Maski na ścianie'/>
                )}/>
                <Route render= {() => (
                    <img src={img1} alt='Biblioteka'/>
                )}/>
            </Switch>
        </>
     );
}
 
export default Header;
