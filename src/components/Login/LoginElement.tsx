import React from "react";
import "./LoginElement.css";

type Props = {};

const LoginElement = (props: Props) => {
  return (
    <div className="login-element">
      <h2>Giriş Yap</h2>
      <form>
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

        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginElement;
