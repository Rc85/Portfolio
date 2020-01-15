import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import InputField from '../../components/InputField/InputField';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { Request } from '../../helpers/request';
import { routes } from '../../../../shared';
import Alert from '../../components/Alert/Alert';

export const Contact = (props) => {
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    detail: ''
  }
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({...initialState});

  const handleSubmit = async(e) => {
    e.preventDefault();

    setStatus('Submitting');

    await Request({
      ...routes.contact,
      data: form
    })
    .then(response => {
      setForm({...initialState});
      setStatus('Submitted');
    })
    .catch(err => {
      setStatus('Error');
    })
  }

  const handleFirstNameChange = (val) => {
    setForm({...form, first_name: val});
  }
  
  const handleLastNameChange = (val) => {
    setForm({...form, last_name: val});
  }
  
  const handleEmailChange = (val) => {
    setForm({...form, email: val});
  }
  
  const handleDetailChange = (val) => {
    setForm({...form, detail: val});
  }

  return(
    <section id='contact' className='main'>
      <div className='content'>
        <h1>Contact</h1>
  
        <p>Question? Feedback? Ideas? Let me know. You can email me at <a href='mailto:rchin@rogerchin.dev'>rchin@rogerchin.dev</a> or use the form below.</p>

        {status === 'Submitted' && <Alert type='success' text='Your message has been sent' className='mb-3' />}
  
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <InputField label='First Name' type='text' value={form.first_name} required disabled={status === 'Submitting'} name='first_name' onChange={handleFirstNameChange} />
            <InputField label='Last Name' type='text' value={form.last_name} required disabled={status === 'Submitting'} name='last_name' onChange={handleLastNameChange} />
            <InputField label='Email' type='email' value={form.email} required disabled={status === 'Submitting'} name='email' onChange={handleEmailChange} />
          </div>
  
          <div className='form-row'>
            <InputField type='textarea' value={form.detail} label='Feedback/Question' rows='10' name='detail' disabled={status === 'Submitting'} onChange={handleDetailChange} required />
          </div>
  
          <div className='form-buttons'>
            <SubmitButton submitting={status === 'Submitting'} />
          </div>
        </form>
      </div>
    </section>
  );
}

Contact.propTypes = {

}

export default Contact;