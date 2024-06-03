import React from "react";
import "./ChangePasswordElement.css";
import { ChangePasswordDto } from "../../models/Auth/changePasswordBody";
import { Field, Form, Formik } from "formik";
import authManagementService from "../../services/authManagementService";

type Props = {};

const ChangePasswordElement = (props: Props) => {
  const initialValues: ChangePasswordDto = {
    emailAddress: "",
    currentPassword: "",
    newPassword: "",
  };

  const handleSubmit = async (values: ChangePasswordDto) => {
    try {
      await authManagementService.changePassword(values);
      console.log("Sifre değişikliği başarılı!");
    } catch (error) {
      console.error("Sifre değişikliği:", error);
    }
  };

  return (
    <div className="change-password-element">
      <h2>Şifre Değiştir</h2>
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
              name="currentPassword"
              placeholder="Mevcut Şifre"
            />

            <Field
              type="password"
              id="new-password"
              name="newPassword"
              placeholder="Yeni Şifre"
            />

            <button type="submit" disabled={isSubmitting}>
              Şifre Değiştir
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePasswordElement;
