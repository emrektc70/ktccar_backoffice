import View from "./View";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


type Props = {
  isLog: boolean;
  changeSecurityFields: ReduxUniversalSetter;
  getUserId: (id: string) => void;
  firstName: string;
  lastName: string;
  userName: string;
  id: string;
  changeUserField: (field: string, value: any) => void
};

const ViewModel: React.FC<Props> = ({
  isLog,
  changeSecurityFields,
  getUserId,
  firstName,
  lastName,
  userName,
  id,
  changeUserField
}) => {

  const token = sessionStorage.getItem('token')
  const navigation = useNavigate()


  const tokenDecode = useMemo(() => {
    if (token) {
      return jwt_decode<TokenUser>(token);
    }
    return null;
  }, [token]);


  useEffect(() => {
    if (tokenDecode) {
      const idToken = tokenDecode.id
      const stringId = idToken.toString()
      changeUserField('id', stringId)
      getUserId(id)
    } else {
      navigation(`/login`)
    }
    // a modifier
  }, [getUserId, tokenDecode, id, changeUserField, navigation])

  const handleClickSignOut = useCallback(() => {
    sessionStorage.clear()
    localStorage.clear()
    changeSecurityFields('isLog', false)
    navigation(`/login`)

  }, [changeSecurityFields])

  return <View
    handleClickSignOut={handleClickSignOut}
    firstName={firstName}
    lastName={lastName}
    userName={userName}

  />;
};

export default ViewModel;
