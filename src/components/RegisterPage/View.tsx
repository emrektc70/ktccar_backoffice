import styles from "./styles.module.scss";
import Separator from "../Separator/view";
import peugeot from "./assets/peugeot.jpg"
import TextField from "@mui/material/TextField";


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
    <div className={styles.contentRegister}>
      <div className={styles.box}>
        <div className={styles.left}>
          <div className={styles.boxRegister}>
            <div className={styles.title}> S'inscrire </div>
            <Separator />
            <div className={styles.inputBox}>
              <TextField
                type="text"
                className={styles.inputemail}
                placeholder="Entre votre nom"
                value={lastName}
                onChange={handleClickLastname}
                label="Nom"
                variant="filled"
                fullWidth
                style={{ background: "#fff" }}
              />
              <TextField
                fullWidth
                type="text"
                className={styles.inputemail}
                placeholder="Entre votre prénom"
                value={firstName}
                onChange={handleClickFirstName}
                label="Prénom"
                variant="filled"
                style={{ background: "#fff" }}
              />
              <TextField
                fullWidth
                type="text"
                className={styles.inputemail}
                placeholder="Entre votre nom d'utulisateur"
                value={username}
                onChange={handleClickUsername}
                label="Nom d'utulisateur:"
                variant="filled"
                style={{ background: "#fff" }}
              />
              <TextField
                type="tel"
                fullWidth
                className={styles.inputemail}
                placeholder="06 41 78 58 08"
                value={phoneNumber}
                onChange={handleClickPhoneNumber}
                label="Numéro de téléphone"
                variant="filled"
                style={{ background: "#fff" }}
              />

              <TextField
                type="email"
                className={styles.inputemail}
                placeholder="Entre votre email"
                value={emailRegister}
                onChange={handleClickEmail}
                label="Email"
                variant="filled"
                fullWidth
                style={{ background: "#fff" }}
              />
              <TextField
                type="password"
                fullWidth
                className={styles.inputemail}
                placeholder="Entre votre mot de passe"
                value={passwordRegister}
                onChange={handleClickPassword}
                label="Mot de passe"
                variant="filled"
                style={{ background: "#fff" }}

              />
              <div className={styles.bottomBox}>
                <div className={styles.connexion} onClick={handleValidateRegister}>
                  Je crée mon compte
                </div>
                <div className={styles.register} onClick={navigateLogin}>
                  J'ai déja un compte ?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={peugeot} className={styles.imgStyle} alt="" />
        </div>
      </div>
    </div >
  );
};
export default View;
