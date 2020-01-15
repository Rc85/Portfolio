import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const InputField = (props) => {
  const handleOnChange = (e) => {
    props.onChange(e.target.value);
  }

  return(
    <div className='input-container'>
      <div><label><small>{props.label} {props.required && <span className='text-red'>*</span>}</small></label></div>
      {props.type === 'textarea'
      ? <textarea name={props.name} value={props.value} onChange={handleOnChange} disabled={props.disabled} required={props.required} rows={props.rows} />
      : <input type={props.type} name={props.name} value={props.value} onChange={handleOnChange} disabled={props.disabled} required={props.required} />}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.string
}

export default InputField;