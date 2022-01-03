import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from './partials/Input';
import Label from './partials/Label';
import FormErrorMessage from './partials/FormErrorMessage';
import Button from '../Button/Button';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

const SignUpForm = () => {
  const [message, setMessage] = useState('');
  const form = useRef();
  const sendEmail = ({ values, actions }) => {
    emailjs.sendForm('service_9vq9heh', 'template_czw29ho', form.current, 'user_nTdFCj7yE5AhEsY5VA41D').then(
      (result) => {
        setMessage(`-`);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div style={{ minHeight: '600px' }}>
      {message ? (
        <div className='flex justify-center flex-col items-center'>
          <h2 className='text-2xl w-full text-center'>Great! We have your information</h2>
          <h3>We will be in touch</h3>
        </div>
      ) : (
        <Formik
          initialValues={{
            fname: '',
            lname: '',
            cname: '',
            cmail: '',
            cmessage: '',
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={yup.object().shape({
            fname: yup.string().required('First Name is Required'),
            lname: yup.string().required('Last Name is Required'),
            cname: yup.string().required('Company Name is Required'),
            cmail: yup.string().email('Invalid email').required('Company Email is Required'),
            cmessage: yup.string(),
          })}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <Form ref={form}>
              <ErrorMessage name='serverError' component={FormErrorMessage} />
              <div>
                <Label htmlFor='fname'>First Name</Label>
                <Field type='text' name='fname' placeholder='First Name' as={Input} />
                <ErrorMessage name='fname' component={FormErrorMessage} />
              </div>
              <div>
                <Label htmlFor='lname'>Last Name</Label>
                <Field type='text' name='lname' placeholder='Last Name' as={Input} />
                <ErrorMessage name='lname' component={FormErrorMessage} />
              </div>
              <div>
                <Label htmlFor='cname'>Company Name</Label>
                <Field type='text' name='cname' placeholder='Company Name' as={Input} />
                <ErrorMessage name='cname' component={FormErrorMessage} />
              </div>
              <div>
                <Label htmlFor='cmail'>Company Email</Label>
                <Field type='email' name='cmail' placeholder='Company Email' as={Input} />
                <ErrorMessage name='cmail' component={FormErrorMessage} />
              </div>
              <div>
                <Label htmlFor='message'>Message (Optional)</Label>
                <Field type='text' name='message' placeholder='Message' as={Input} />
                <ErrorMessage name='message' component={FormErrorMessage} />
              </div>

              <Button type='submit' color='primary' disabled={isSubmitting} className='mt-6 w-full'>
                Book a Demo
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default SignUpForm;
