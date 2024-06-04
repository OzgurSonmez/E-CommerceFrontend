import React from "react";
import "./LoginElement.css";
import { LoginDto } from "../../models/Auth/loginRequestBody";
import authManagementService from "../../services/authManagementService";
import { Field, Form, Formik } from "formik";
import emailService from "../../services/emailService";
import customerService from "../../services/customerService";
import { useDispatch } from "react-redux";
import { setEmailId } from "../../store/email/emailSlice";
import { setCustomerId } from "../../store/customer/customerSlice";

type Props = {};

const LoginElement = (props: Props) => {
  const initialValues: LoginDto = {
    emailAddress: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = async (values: LoginDto) => {
    try {
      await authManagementService.login(values);
      console.log("Giriş denemesi başarılı!");
      try {
        const emailResponse = await emailService.getEmailIdByEmailAddress(
          values.emailAddress
        );
        const emailData = emailResponse.data;
        dispatch(setEmailId(emailData.emailId));
        try {
          const customerResponse = await customerService.getCustomerIdByEmailId(
            emailData.emailId
          );
          const customerData = customerResponse.data;
          dispatch(setCustomerId(customerData.customerId));
        } catch (error) {
          console.error("CustomerId hatası:", error);
        }
      } catch (error) {
        console.error("EmailId hatası:", error);
      }
    } catch (error) {
      console.error("Giriş denemesi hatası:", error);
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
