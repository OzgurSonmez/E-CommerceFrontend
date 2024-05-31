import React from "react";
import "./ChangePasswordElement.css";

type Props = {};

const ChangePasswordElement = (props: Props) => {
  return (
    <div className="change-password-element">
      <h2>Şifre Değiştir</h2>
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
          placeholder="Mevcut Şifre"
        />

        <input
          type="password"
          id="new-password"
          name="new-password"
          placeholder="Yeni Şifre"
        />

        <button type="submit">Şifre Değiştir</button>
      </form>
    </div>
  );
};

export default ChangePasswordElement;
