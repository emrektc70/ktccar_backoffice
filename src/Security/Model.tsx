import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import View from "./View";
import publicRoute from "./publicRoute";
import { PageEnum } from "../enum/pageEnum";

type Props = {
  children: React.ReactNode;
  isLog: boolean;
  token: string;
};

const ViewModel: React.FC<Props> = ({ children, isLog, token }) => {
  const [checkIsLog, setCheckIsLog] = useState<boolean>(false)

  const navigation = useNavigate()

  const location = useLocation();

  const pathName = useMemo(() => {
    return location.pathname;
  }, [location]);

  const isPublicRoute = useMemo(() => {
    return publicRoute.includes(pathName as PageEnum);
  }, [pathName]);

  useEffect(() => {
    const getToken = sessionStorage.getItem('token');
    if (!isPublicRoute && !getToken) {
      navigation(`/login`)
    }
    setCheckIsLog(false)
  }, [checkIsLog, isLog, isPublicRoute, navigation, pathName]);

  useEffect(() => {
    if (isLog && !checkIsLog) {
      navigation(`/`)
    }
  }, [isLog, checkIsLog, navigation])

  /*   useEffect(() => {
      if (!sessionStorage.getItem('token')) {
        const desiredPage = sessionStorage.getItem('desiredPage');
  
        if (desiredPage === '/login') {
          navigation(PageEnum.LOGIN);
        } else if (desiredPage === '/register') {
          navigation(PageEnum.REGISTER);
        } else {
          navigation(PageEnum.HOME);
        }
      }
    }, [navigation]); */



  return (
    <View isLog={isLog} isPublicRoute={isPublicRoute} checkIsLog={checkIsLog} >
      {children}
    </View>
  );
};

export default ViewModel;
