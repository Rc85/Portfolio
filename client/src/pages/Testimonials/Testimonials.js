import React, { useEffect, useState} from 'react';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import InputField from '../../components/InputField/InputField';
import { Request } from '../../helpers/request';
import { routes } from '../../../../shared';

export const Testimonials = (props) => {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    testimonial: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    (async() => {
      setStatus('Submitting');

      await Request({
        ...routes.createTestimonials,
        data: form
      })
      .then(() => {
        setStatus('Submitted');
      })
      .catch(() => {
        setStatus('Error');
      })
    })();
  }

  const handleFirstNameChange = (val) => {
    setForm({...form, first_name: val});
  }
  
  const handleLastNameChange = (val) => {
    setForm({...form, last_name: val});
  }
  
  const handleTestimonialChange = (val) => {
    setForm({...form, testimonial: val});
  }

  return(
    <section id='testimonials' className='main'>
      <div className='content'>
        <h1>Submit Testimonial</h1>

        <p>Worked with Roger before? Submit a testimonial regarding your experience working with him.</p>

        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <InputField label='First Name' type='text' name='first_name' value={form.first_name} onChange={handleFirstNameChange} required disabled={status === 'Submitting'} />
            <InputField label='Last Name' type='text' name='last_name' value={form.last_name} onChange={handleLastNameChange} required disabled={status === 'Submitting'} />
          </div>

          <div className='form-row'>
            <InputField label='Testimonial' type='textarea' name='testmonial' rows='10' value={form.testimonial} onChange={handleTestimonialChange} required disabled={status === 'Submitting'} />
          </div>

          <div className='form-buttons'>
            <SubmitButton submitting={status === 'Submitting'} />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Testimonials;