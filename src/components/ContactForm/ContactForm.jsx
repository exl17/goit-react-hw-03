import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must not exceed 50 characters'),
    number: Yup.string()
      .required('Number is required')
      .min(3, 'Number must be at least 3 characters')
      .max(15, 'Number must not exceed 15 characters')
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" className="error" />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
