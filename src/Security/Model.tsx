import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import View from "./View";
import publicRoute from "./publicRoute";
import { PageEnum } from "../enum/pageEnum";

type Props = {
  children: React.ReactNode;
  isLog: boolean;
  token: string;
};

const ViewModel: React.FC<Props> = ({ children, isLog, token }) => {
  const location = useLocation();

  const pathName = useMemo(() => {
    return location.pathname;
  }, [location]);

  const isPublicRoute = useMemo(() => {
    return publicRoute.includes(pathName as PageEnum);
  }, [pathName]);

  var getToken = localStorage.getItem(token);

  useEffect(() => {
    if (getToken === null || "") {
      //isLog === false
    }
  }, [getToken]);

  console.log(isPublicRoute);

  return (
    <View isLog={isLog} isPublicRoute={isPublicRoute}>
      {children}
    </View>
  );
};

export default ViewModel;
