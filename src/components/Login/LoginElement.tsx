import React from "react";
import "./LoginElement.css";
import { LoginDto } from "../../models/Auth/loginRequestBody";
import authManagementService from "../../services/authManagementService";
import { Field, Form, Formik } from "formik";

type Props = {};

const LoginElement = (props: Props) => {
  const initialValues: LoginDto = {
    emailAddress: "",
    password: "",
  };

  const handleSubmit = async (values: LoginDto) => {
    try {
      await authManagementService.login(values);
      console.log("Giriş başarılı!");
    } catch (error) {
      console.error("Giriş hatası:", error);
    }
  };

  return (
    <div className="login-element">
      <h2>Giriş Yap</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="email"
              id="email"
              name="emailAddress"
              placeholder="Email Adresi"
            />

            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Şifre"
            />

            <button type="submit" disabled={isSubmitting}>
              Giriş Yap
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginElement;
