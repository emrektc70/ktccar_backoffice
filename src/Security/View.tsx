import { useLocation } from "react-router-dom";
import Test from "../page/test";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  isLog: boolean;
};

const View: React.FC<Props> = ({ children, isLog }) => {
  
  return <>{isLog ? children : <Test />}</>;
};

export default View;
