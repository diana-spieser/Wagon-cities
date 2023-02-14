import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from './city';

const CityList = ({ cities }) => {
  const renderList = () => cities.map(city => <City key={city.name} city={city} />);

  return (
    <ul className="list-group cities">
      {renderList()}
    </ul>
  );
};

const mapStateToProps = ({ cities }) => ({ cities });

export default connect(mapStateToProps)(CityList);
