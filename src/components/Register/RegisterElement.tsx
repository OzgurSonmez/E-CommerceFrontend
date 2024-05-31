import React from "react";
import "./RegisterElement.css";
type Props = {};

const RegisterElement = (props: Props) => {
  return (
    <div className="register-element">
      <h2>Kayıt Ol</h2>
      <form>
        <input type="text" id="username" name="username" placeholder="İsim" />

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Soyisim"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Adresi"
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Şifre"
        />

        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default RegisterElement;
