import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';
import HomePage from '../components/Home';
import PortofolioPage from '../components/Portofolio';
import ContactPage from "../components/Contact";
import PortofolioDetailsPage from '../components/PortofolioDetails';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portofolio" component={PortofolioPage} exact={true}/>
        <Route path="/portofolio/:id" component={PortofolioDetailsPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;