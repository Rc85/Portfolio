import React from 'react';
import PropTypes from 'prop-types';

export const Badge = (props) => {
  return(
    <span className={`badge ${props.className ? props.className : 'badge-highlight-blue'}`}>{props.text}</span>
  );
}

Badge.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default Badge;