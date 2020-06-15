import React from "react";
import "./Helper.css";

import { Formik, Form, Field, ErrorMessage } from "formik";

export const Helper = () => (
  <div>
    <h1 className="request-form-header">Request Form</h1>
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        location: "",
        request: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(
            "Your request has been submitted. Please allow 48 hours for verification and you should see your post on the 'Help a Helper page'"
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

          <Field
            className="request-form-field"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" />

          <Field
            className="request-form-field"
            type="location"
            name="location"
            placeholder="Location"
          />

          <Field
            className="request-text-area"
            component="textarea"
            name="request"
            placeholder="Enter your request"
          />
          <label className="evidence">
            Evidence of Essential Worker Status: {"  "}
            <Field id="file" name="file" type="file" />
          </label>

          <button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
