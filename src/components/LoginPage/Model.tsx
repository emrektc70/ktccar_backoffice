import { useCallback, useState } from "react";
import View from "./View";

type Props = {
  postLogin: () => void;
  password: string;
  email: string;
  changeAuthentificationFields: ReduxUniversalSetter;
};

const ViewModel: React.FC<Props> = ({
  postLogin,
  password,
  email,
  changeAuthentificationFields,
}) => {
  const loginData = useCallback(() => {
    postLogin();
  }, [postLogin]);

  const handleChangeEmail = useCallback((e: React.BaseSyntheticEvent) => {
    changeAuthentificationFields("email", e.target.value);
  }, []);

  const handleChangePassword = useCallback((e: React.BaseSyntheticEvent) => {
    changeAuthentificationFields("password", e.target.value);
  }, []);

  return (
    <View
      loginData={loginData}
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
    />
  );
};
export default ViewModel;
