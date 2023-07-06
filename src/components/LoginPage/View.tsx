import "./styles.scss";
import Separator from "../Separator/view";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

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
        <div className="title"> Se connecter </div>
        <Separator />
        <div className="inputBox">
          <TextField label="email" variant="filled" className="inputemail" value={email} onChange={handleChangeEmail}
            style={{ background: "#fff" }} fullWidth

          />
          <div className="boxPassword">
            <TextField label="Mot de passe" variant="filled" className="inputpassword"
              value={password} onChange={handleChangePassword} style={{ background: "#fff" }} fullWidth type="password" />
          </div>

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
