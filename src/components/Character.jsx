import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Character = ({ name, image }) => (
  <Link to={`/${name}`}>
    <figure>
      <img src={image} />
      <figcaption>{name}</figcaption>
    </figure>
  </Link> 
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
