import "./styles.scss";
import Separator from "../Separator/view";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

type Props = {};

const View: React.FC<Props> = () => {
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    axios({
      url: "http://localhost:3110/auth/login",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data);
      });
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="labelName">Mot de passe: </label>
          <input
            type="password"
            className="inputpassword"
            placeholder="Entre votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="resetPassword"> Mot de passe oublié</div>
          <div className="test">
            <Separator />
          </div>
          <div className="bottomBox">
            <div className="register" onClick={navigateRegister}>
              Créer un compte
            </div>
            {error && <div> {error}</div>}
            <div className="connexion" onClick={handleLogin}>
              Se connecter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default View;
