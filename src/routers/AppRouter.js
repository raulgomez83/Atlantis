import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { Atlantis } from '../Atlantis';
import { Catalogos } from '../components/Catalogos';
import { Consultas } from '../components/Consultas';
import { Destinos } from '../components/Destinos';
import { Ofertas } from '../components/Ofertas';

export const AppRouter = () => {
    return (
        <Router> 
            <div>
                <Switch>
                  <Route exact path="/" component={Atlantis}/>
                  <Route exact path="/consultas" component={Consultas}/>
                  <Route exact path="/ofertas" component={Ofertas}/>
                  <Route exact path="/catalogos" component={Catalogos}/>
                  <Route exact path="/destinos" component={Destinos}/> 

                  <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
