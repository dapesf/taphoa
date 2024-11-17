import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({data}) => (
  <div className="Card">
    {data.name}
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
