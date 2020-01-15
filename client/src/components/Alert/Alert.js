import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/pro-solid-svg-icons';

export const Alert = (props) => {
  return(
    <div className={`alert-container alert-${props.type} ${props.className ? props.className : ''}`}>
      <div className='alert-icon-container'>
        {props.type === 'success' && <FontAwesomeIcon icon={faCheckCircle} />}
        {props.type === 'fail' && <FontAwesomeIcon icon={faTimesCircle} />}
        {props.type === 'warning' && <FontAwesomeIcon icon={faExclamationCircle} />}
      </div>

      <div className='alert-text-container'>
        <div className='alert-text'>{props.text}</div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string
}

export default Alert;