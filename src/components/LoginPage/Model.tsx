import { useCallback, useEffect } from "react";
import View from "./View";

type Props = {
  postLogin: () => void;
  password: string;
  email: string;
  changeAuthentificationFields: ReduxUniversalSetter;
  changeSecurityFields: ReduxUniversalSetter;
  isLog: boolean;
};

const ViewModel: React.FC<Props> = ({
  postLogin,
  password,
  email,
  changeAuthentificationFields,
  changeSecurityFields,
  isLog,
}) => {
  const loginData = useCallback(() => {
    postLogin();
  }, [postLogin]);

  const handleChangeEmail = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeAuthentificationFields("email", e.target.value);
    },
    [changeAuthentificationFields]
  );

  const handleChangePassword = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeAuthentificationFields("password", e.target.value);
    },
    [changeAuthentificationFields]
  );

  useEffect(() => {
    changeSecurityFields("isLog", false)
  }, [changeSecurityFields])

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
