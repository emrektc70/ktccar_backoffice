import { useLocation } from "react-router-dom";
import Test from "../page/test";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  isLog: boolean;
  isPublicRoute: boolean;
  checkIsLog: boolean
};

const View: React.FC<Props> = ({ children, isLog, isPublicRoute, checkIsLog }) => {
  return <>
    {
      !checkIsLog && children
    }
  </>;
};

export default View;
