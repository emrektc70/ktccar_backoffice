import "./styles.scss";
import Separator from "../Separator/view";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

type Props = {
  loginData: VoidFunction;
  password: string;
  email: string;
  handleChangeEmail: (e: React.BaseSyntheticEvent) => void;
  handleChangePassword: (e: React.BaseSyntheticEvent) => void;
};

const View: React.FC<Props> = ({
  loginData,
  password,
  email,
  handleChangeEmail,
  handleChangePassword,
}) => {
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div className="content-login">
      <div className="box">
        <div className="title"> S'inscrire </div>
        <Separator />
        <div className="inputBox">
          <label className="labelName">Email: </label>
          <input
            type="email"
            className="inputemail"
            placeholder="Entre votre email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label className="labelName">Mot de passe: </label>
          <input
            type="password"
            className="inputpassword"
            placeholder="Entre votre mot de passe"
            value={password}
            onChange={handleChangePassword}
          />
          <div className="resetPassword"> Mot de passe oublié</div>
          <div className="test">
            <Separator />
          </div>
          <div className="bottomBox">
            <div className="register" onClick={navigateRegister}>
              Créer un compte
            </div>

            <div className="connexion" onClick={loginData}>
              Se connecter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default View;
