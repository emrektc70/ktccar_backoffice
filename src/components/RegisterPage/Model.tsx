import { useCallback, useEffect, useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";

type Props = {
  firstName: string;
  passwordRegister: string;
  emailRegister: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  changeRegisterFields: ReduxUniversalSetter;
  postRegister: VoidFunction;
};

const ViewModel: React.FC<Props> = ({
  firstName,
  passwordRegister,
  emailRegister,
  lastName,
  phoneNumber,
  username,
  changeRegisterFields,
  postRegister,
}) => {
  const navigate = useNavigate();
  const [checkForm, setCheckForm] = useState<boolean>(false)

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleClickFirstName = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const value = e.target.value;
      changeRegisterFields("firstName", value);
    },
    [changeRegisterFields]
  );
  const handleClickEmail = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const value = e.target.value;
      changeRegisterFields("emailRegister", value);
    },
    [changeRegisterFields]
  );
  const handleClickPassword = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const value = e.target.value;
      changeRegisterFields("passwordRegister", value);
    },
    [changeRegisterFields]
  );
  const handleClickLastname = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const value = e.target.value;
      changeRegisterFields("lastName", value);
    },
    [changeRegisterFields]
  );

  const handleClickPhoneNumber = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const value = e.target.value;
      const numericRegex = /^\d*$/; // Expression régulière pour vérifier si la chaîne contient uniquement des chiffres

      if (numericRegex.test(value)) {
        changeRegisterFields("phoneNumber", value);
      }
    },
    [changeRegisterFields]
  );

  const handleClickUsername = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const value = e.target.value;
      changeRegisterFields("username", value);
    },
    [changeRegisterFields]
  );

  const handleValidateRegister = useCallback(() => {
    postRegister();
  }, [postRegister]);

  /*   useEffect(() => {
      if (username.length > 3 && firstName.length > 3 && passwordRegister.length > 3 && phoneNumber.length > 7 && lastName.length > 3) {
        setCheckForm(false)
      } else {
        setCheckForm(true)
      }
    }, [firstName.length, lastName.length, passwordRegister.length, phoneNumber.length, username.length, checkForm])
    console.log(checkForm) */

  return (
    <View
      firstName={firstName}
      passwordRegister={passwordRegister}
      emailRegister={emailRegister}
      lastName={lastName}
      phoneNumber={phoneNumber}
      username={username}
      navigateLogin={navigateLogin}
      handleClickFirstName={handleClickFirstName}
      handleClickEmail={handleClickEmail}
      handleClickPassword={handleClickPassword}
      handleClickLastname={handleClickLastname}
      handleClickPhoneNumber={handleClickPhoneNumber}
      handleClickUsername={handleClickUsername}
      handleValidateRegister={handleValidateRegister}
      checkForm={checkForm}
    />
  );
};
export default ViewModel;
