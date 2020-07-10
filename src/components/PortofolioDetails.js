import React from 'react';

const PortofolioDetailsPage = (props) => (
  <div>
    <h3>The details</h3>
    <p>You selected component {props.match.params.id}</p>
  </div>
);


export default PortofolioDetailsPage;