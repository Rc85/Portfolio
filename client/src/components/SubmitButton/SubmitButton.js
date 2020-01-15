import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';

export const SubmitButton = (props) => {
  return(
    <button type='submit' className='btn btn-highlight-blue' disabled={props.submitting}>{props.submitting ? <FontAwesomeIcon icon={faCircleNotch} spin /> : props.text || 'Submit'}</button>
  );
}

SubmitButton.propTypes = {
  submitting: PropTypes.bool,
  text: PropTypes.string
}

export default SubmitButton;