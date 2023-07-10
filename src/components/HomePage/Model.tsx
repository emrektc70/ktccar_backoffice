import "./styles.module.scss";
import View from "./View";
import { useEffect, useMemo } from "react";

type Props = {

};

const ViewModel: React.FC<Props> = ({
}) => {

  const token = sessionStorage.getItem('token')
  const tokenCheck = useMemo(() => {
    if (token) {
      return "Commencer a discuter"
    } else {
      return "Créer un compte"
    }
  }, [token])


  return <View
    tokenCheck={tokenCheck}
    token={token}
  />;
};

export default ViewModel;
