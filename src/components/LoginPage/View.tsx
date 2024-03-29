import Separator from "../Separator/view";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss";
import porsche3 from './assets/porsche3.jpg';
import { Button } from "@material-ui/core";


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
    <div className={styles.contentLogin}>
      <div className={styles.box}>
        <div className={styles.left}>
          <div className={styles.title}> Se connecter </div>
          <div className={styles.test} >
            <Separator />
          </div>          <div className={styles.inputBox}>
            <TextField label="email" variant="filled" className={styles.inputemail} value={email} onChange={handleChangeEmail}
              style={{ background: "#fff" }} fullWidth
            />
            <div className={styles.boxPassword}>
              <TextField label="Mot de passe" variant="filled" className={styles.inputpassword}
                value={password} onChange={handleChangePassword} style={{ background: "#fff" }} fullWidth type="password" />
            </div>

            {/*  <div className={styles.resetPassword}> Mot de passe oublié</div> */}
            <div className={styles.separator} >
              <Separator />
            </div>
            <div className={styles.bottomBox}>
              <Button
                variant="contained"
                className={styles.connexion}
                onClick={loginData}>
                Se connecter
              </Button>
              <div className={styles.register} onClick={navigateRegister}>
                Je veux créer un compte
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={porsche3} className={styles.imgStyle} alt="" />
        </div>
      </div>
    </div >
  );
};
export default View;
