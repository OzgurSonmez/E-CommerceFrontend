import React from "react";
import "./RegisterElement.css";
import { RegisterDto } from "../../models/Auth/registerRequestBody";
import { Field, Form, Formik } from "formik";
import authManagementService from "../../services/authManagementService";
type Props = {};

const RegisterElement = (props: Props) => {
  const initialValues: RegisterDto = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  };

  const handleSubmit = async (values: RegisterDto) => {
    try {
      await authManagementService.register(values);
      console.log("Kayıt başarılı!");
    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  };
  return (
    <div className="register-element">
      <h2>Kayıt Ol</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="firstName" placeholder="İsim" />

            <Field type="text" name="lastName" placeholder="Soyisim" />
            <Field
              type="email"
              name="emailAddress"
              placeholder="Email Adresi"
            />

            <Field type="password" name="password" placeholder="Şifre" />

            <button type="submit" disabled={isSubmitting}>
              Kayıt Ol
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterElement;
