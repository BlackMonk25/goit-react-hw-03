// import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Minimum 3 characters')
        .max(50, 'Maximum 50 characters')
        .required("Required field"),
      number: Yup.string()
        .min(3, 'Minimum 3 characters')
        .max(50, 'Maximum 50 characters')
        .required("Required field"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      onAddContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={styles.inputField}
          placeholder="Enter name"
        />
      </label>
      {formik.touched.name && formik.errors.name && (
        <div className={styles.errorText}>{formik.errors.name}</div>
      )}

      <label className={styles.label}>
        Number:
        <input
          type="tel"
          name="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
          className={styles.inputField}
          placeholder="Enter number"
        />
      </label>
      {formik.touched.number && formik.errors.number && (
        <div className={styles.errorText}>{formik.errors.number}</div>
      )}

      <button type="submit" className={styles.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;





