import React from "react";
import "./Helper.css";

import { Formik, Form, Field, ErrorMessage } from "formik";

export const Message = () => (
  <div>
    <h1 className="request-form-header">Message Helper</h1>
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        location: "",
        request: "",
      }}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(
            /*JSON.stringify(values, null, 2)*/ "Your request has been submitted. Please allow 48 hours for verification and you should see your post on the 'Help a Helper page'"
          );
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="request-form">
          <Field
            className="request-form-field"
            name="fullName"
            placeholder="Name"
          />
          {/* <ErrorMessage name="name" component="div" /> */}

          <Field
            className="request-form-field"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" />

          {/* <ErrorMessage name="email" component="div" /> */}

          <Field
            className="request-form-field"
            component="textarea"
            name="request"
            placeholder="Hi there! I'd like to fulfill your request!"
          />

          {/* <ErrorMessage name="email" component="div" /> */}

          <button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
