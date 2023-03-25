import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import View from "./View";
import publicRoute from "./publicRoute";
import { PageEnum } from "../enum/pageEnum";

type Props = {
  children: React.ReactNode;
  isLog: boolean;
};

const ViewModel: React.FC<Props> = ({ children, isLog }) => {
  const location = useLocation();

  const pathName = useMemo(() => {
    return location.pathname;
  }, [location]);

  const isPublicRoute = useMemo(() => {
    return publicRoute.includes(pathName as PageEnum);
  }, [pathName]);

  return <View isLog={isLog}> {children} </View>;
};

export default ViewModel;
