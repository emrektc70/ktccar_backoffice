import "./styles.scss";
import Separator from "../Separator/view";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div className="content-register">
      <div className="box-register">
        <div className="title"> S'inscrire </div>
        <Separator />
        <div className="inputBox">
          <label className="labelName">Nom: </label>
          <input
            type="text"
            className="inputemail"
            placeholder="Entre votre nom"
          />
          <label className="labelName">Prénom: </label>
          <input
            type="text"
            className="inputemail"
            placeholder="Entre votre prénom"
          />
          <label className="labelName">Numéro de téléphone: </label>
          <input
            type="tel"
            className="inputemail"
            placeholder="Entre votre numéro"
          />
          <label className="labelName">Email: </label>
          <input
            type="email"
            className="inputemail"
            placeholder="Entre votre email"
          />
          <label className="labelName">Mot-de-passe: </label>
          <input
            type="password"
            className="inputpassword"
            placeholder="Entre votre mot de passe"
          />
          <div className="resetPassword"> Mot de passe oublié</div>
          <div className="test">
            <Separator />
          </div>
          <div className="bottomBox">
            <div className="connexion"> Se connecter</div>
            <div className="register" onClick={navigateLogin}>
              {" "}
              Créer mon compte
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
