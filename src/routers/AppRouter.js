import React from 'react';
import { Redirect, Route,BrowserRouter as Router, Switch } from 'react-router-dom';

import { HomePage } from '../components/homepage/HomePage';
import { Ofertas } from '../components/Ofertas';
import { Africa } from '../components/destinos/continentes/Africa';
import { America } from '../components/destinos/continentes/America';
import { Asia } from '../components/destinos/continentes/Asia';
import { Europa } from '../components/destinos/continentes/Europa';
import { Oceania } from '../components/destinos/continentes/Oceania';
import { DestinoItem } from '../components/destinos/DestinoItem';
import { ContactoPage } from '../components/ContactoPage';




export const AppRouter = () => {
    return (
        <Router> 
            <div>
                <Switch>
                  <Route exact path="/" component={HomePage}/>

                  <Route exact path="/africa" component={Africa}/>
                  <Route exact path="/america" component={America}/>
                  <Route exact path="/asia" component={Asia}/>
                  <Route exact path="/europa" component={Europa}/>
                  <Route exact path="/oceania" component={Oceania}/>

                  <Route path={`/:continente/:pais`} children={<DestinoItem/>}/>

                  <Route exact path="/ofertas" component={Ofertas}/>
                  <Route exact path="/contacto" component={ContactoPage}/>

                  <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
