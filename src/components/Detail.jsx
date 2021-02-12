import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, name, image }) => (
  <figure key={id}>
    <img src={image} />
    <figcaption>{name}</figcaption>
  </figure>
);

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
