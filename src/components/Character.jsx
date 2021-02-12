import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Character = ({ id, name, image }) => (
  <Link to={`/character/${id}`}>
    <figure key={id}>
      <img src={image} />
      <figcaption>{name}</figcaption>
    </figure>
  </Link> 
);

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
