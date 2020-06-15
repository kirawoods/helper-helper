import React from "react";
import "./MessageHelper.css";

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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Your message has been sent. Thanks for Helping a Helper!");
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

          <Field
            className="request-form-field"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" />

          <Field
            className="message-text-area"
            component="textarea"
            name="request"
            placeholder="Hi there! I'd like to fulfill your request!"
          />

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
