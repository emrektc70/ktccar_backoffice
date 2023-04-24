import "./styles.scss";
import Separator from "../Separator/view";

type Props = {
  firstName: string;
  passwordRegister: string;
  emailRegister: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  navigateLogin: VoidFunction;
  handleClickFirstName: (e: React.BaseSyntheticEvent) => void;
  handleClickEmail: (e: React.BaseSyntheticEvent) => void;
  handleClickPassword: (e: React.BaseSyntheticEvent) => void;
  handleClickLastname: (e: React.BaseSyntheticEvent) => void;
  handleClickPhoneNumber: (e: React.BaseSyntheticEvent) => void;
  handleClickUsername: (e: React.BaseSyntheticEvent) => void;
  handleValidateRegister: VoidFunction;
};

const View: React.FC<Props> = ({
  firstName,
  passwordRegister,
  emailRegister,
  lastName,
  phoneNumber,
  username,
  navigateLogin,
  handleClickFirstName,
  handleClickEmail,
  handleClickPassword,
  handleClickLastname,
  handleClickPhoneNumber,
  handleClickUsername,
  handleValidateRegister,
}) => {
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
            value={lastName}
            onChange={handleClickLastname}
          />
          <label className="labelName">Prénom: </label>
          <input
            type="text"
            className="inputemail"
            placeholder="Entre votre prénom"
            value={firstName}
            onChange={handleClickFirstName}
          />
          <label className="labelName">Nom d'utulisateur: </label>
          <input
            type="test"
            className="inputemail"
            placeholder="Entre votre nom d'utulisateur"
            value={username}
            onChange={handleClickUsername}
          />
          <label className="labelName">Numéro de téléphone: </label>
          <input
            type="tel"
            className="inputemail"
            placeholder="06 41 78 58 08"
            value={phoneNumber}
            onChange={handleClickPhoneNumber}
          />
          <label className="labelName">Email: </label>
          <input
            type="email"
            className="inputemail"
            placeholder="Entre votre email"
            value={emailRegister}
            onChange={handleClickEmail}
          />

          <label className="labelName">Mot-de-passe: </label>
          <input
            type="password"
            className="inputpassword"
            placeholder="Entre votre mot de passe"
            value={passwordRegister}
            onChange={handleClickPassword}
          />
          <div className="test">
            <Separator />
          </div>
          <div className="bottomBox">
            <div className="register" onClick={navigateLogin}>
              Créer mon compte
            </div>
            <div className="connexion" onClick={handleValidateRegister}>
              Connexion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default View;
