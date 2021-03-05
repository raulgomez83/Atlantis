import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { HomePage } from "../components/homepage/HomePage";
import { Africa } from "../components/destinos/continentes/Africa";
import { America } from "../components/destinos/continentes/America";
import { Asia } from "../components/destinos/continentes/Asia";
import { Europa } from "../components/destinos/continentes/Europa";
import { Oceania } from "../components/destinos/continentes/Oceania";
import { DestinoItem } from "../components/destinos/DestinoItem";
import { ContactoPage } from "../components/ContactoPage";
import { Menubar } from "../components/Menubar";
import { CustomFooter } from "../components/CustomFooter";
import { Modal } from "../components/Modal";
import { Ofertas } from "../components/ofertas/Ofertas";
import { TodosDestinos } from "../components/destinos/TodosDestinos";
import { TodosCatalogos } from "../components/destinos/TodosCatalogos";
import ScrollToTop from "../components/helpers";
import { Cookies } from "../components/Cookies";
import { PoliticaCookies } from "../components/PoliticaCookies";
import { AvisoLegal } from "../components/AvisoLegal";
import { PoliticaPrivacidad } from "../components/PoliticaPrivacidad";

export const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Menubar />
        <Modal />
        <Cookies />
        <CustomFooter />
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/africa" component={Africa} />
          <Route exact path="/america" component={America} />
          <Route exact path="/asia" component={Asia} />
          <Route exact path="/europa" component={Europa} />
          <Route exact path="/oceania" component={Oceania} />

          <Route path={`/:continente/:pais`} children={<DestinoItem />} />

          <Route exact path="/ofertas" component={Ofertas} />
          <Route exact path="/destinos" component={TodosDestinos} />
          <Route exact path="/catalogos" component={TodosCatalogos} />
          <Route exact path="/contacto" component={ContactoPage} />
          <Route exact path="/politicadecookies" component={PoliticaCookies} />
          <Route exact path="/avisolegal" component={AvisoLegal} />
          <Route
            exact
            path="/politicadeprivacidad"
            component={PoliticaPrivacidad}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
