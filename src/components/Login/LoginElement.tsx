import React, { useEffect } from "react";
import "./LoginElement.css";
import { LoginDto } from "../../models/Auth/loginRequestBody";
import authManagementService from "../../services/authManagementService";
import { Field, Form, Formik } from "formik";
import emailService from "../../services/emailService";
import customerService from "../../services/customerService";
import { useDispatch, useSelector } from "react-redux";
import { setEmailAddress, setEmailId } from "../../store/email/emailSlice";
import { setCustomerId } from "../../store/customer/customerSlice";
import basketService from "../../services/basketService";
import { setBasketId } from "../../store/basket/basketSlice";
import { RootState } from "../../store/configureStore";

type Props = {};

const LoginElement = (props: Props) => {
  const initialValues: LoginDto = {
    emailAddress: "",
    password: "",
  };

  const dispatch = useDispatch();

  const emailAddress: string | null = useSelector(
    (state: RootState) => state.email.emailAddress
  );

  const emailId: number | null = useSelector(
    (state: RootState) => state.email.emailId
  );

  const customerId: number | null = useSelector(
    (state: RootState) => state.customer.customerId
  );

  const basketId: number | null = useSelector(
    (state: RootState) => state.basket.basketId
  );

  const handleSubmit = async (values: LoginDto) => {
    try {
      await authManagementService.login(values);
      console.log("Giriş denemesi başarılı!");
      dispatch(setEmailAddress(values.emailAddress));
    } catch (error) {
      console.error("Giriş denemesi hatası:", error);
    }
  };

  // EmailId
  async function fetchEmailIdData(emailAddress: string) {
    try {
      const emailResponse = await emailService.getEmailIdByEmailAddress(
        emailAddress
      );
      const emailData = emailResponse.data;
      dispatch(setEmailId(emailData.emailId));
    } catch (error) {
      console.error("EmailId hatası:", error);
    }
  }

  useEffect(() => {
    if (emailAddress) {
      fetchEmailIdData(emailAddress);
    }
  }, [emailAddress]);

  // CustomerId
  async function fetchCustomerIdData(emailId: number) {
    try {
      const customerResponse = await customerService.getCustomerIdByEmailId(
        emailId
      );
      const customerData = customerResponse.data;
      dispatch(setCustomerId(customerData.customerId));
      console.log(customerData.customerId);
    } catch (error) {
      console.error("CustomerId hatası:", error);
    }
  }

  useEffect(() => {
    if (emailId) {
      fetchCustomerIdData(emailId);
    }
  }, [emailId]);

  // BasketId

  async function fetchBasketIdData(customerId: number) {
    try {
      const basketResponse = await basketService.getBasketIdByCustomerId(
        customerId
      );
      const basketData = basketResponse.data;
      console.log(basketData);
      dispatch(setBasketId(basketData.basketId));
    } catch (error) {
      console.error("BasketId hatası:", error);
    }
  }

  useEffect(() => {
    if (customerId) {
      fetchBasketIdData(customerId);
    }
  }, [customerId]);

  console.log("adres: " + emailAddress);
  console.log("emailId" + emailId);
  console.log("customerId" + customerId);
  console.log("basketId" + basketId);

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
