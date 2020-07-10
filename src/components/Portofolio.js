import React from 'react';
import { Link } from 'react-router-dom';

const PortofolioPage = () => (
  <div>
    <h2>Portofolio</h2>
    <p>Chose a portofolio below to get more</p>
    <Link to="/portofolio/1">Component One</Link>
    <Link to="/portofolio/2">Component Two</Link>
  </div>
);

export default PortofolioPage;