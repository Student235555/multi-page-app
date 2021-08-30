import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CharactersPage from '../pages/CharactersPage';
import CharactersListPage from '../pages/CharactersListPage';
import GodsPage from '../pages/GodsPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/characters' component={CharactersListPage}/>
                <Route path='/character/:id' component={CharactersPage}/>
                <Route path='/gods' component={GodsPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </>
     );
}

export default Page;