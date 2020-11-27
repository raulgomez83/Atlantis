import React from 'react';
import { Redirect, Route,BrowserRouter as Router, Switch } from 'react-router-dom';

import { HomePage } from '../components/homepage/HomePage';
import { Catalogos } from '../components/Catalogos';
import { Consultas } from '../components/Consultas';
import { ListaDestinos } from '../components/destinos/ListaDestinos';
import { Ofertas } from '../components/Ofertas';
import { DestinoItem } from '../components/destinos/DestinoItem';


export const AppRouter = () => {
    return (
        <Router> 
            <div>
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/destinos" component={ListaDestinos}/> 
                  <Route exact path="/destinos/:Id" component={DestinoItem}/> 
                  <Route exact path="/catalogos" component={Catalogos}/>
                  <Route exact path="/ofertas" component={Ofertas}/>
                  <Route exact path="/consultas" component={Consultas}/>

                  <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
