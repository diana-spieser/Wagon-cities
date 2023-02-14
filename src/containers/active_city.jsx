import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = ({ activeCity }) => {
  if (!activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`;

  return (
    <div className="active-city">
      <h3>{activeCity.name}</h3>
      <p>{activeCity.address}</p>
      <img src={url} width="100%" alt={activeCity.name} />
    </div>
  );
};

const mapStateToProps = ({ activeCity }) => ({ activeCity });

export default connect(mapStateToProps)(ActiveCity);
