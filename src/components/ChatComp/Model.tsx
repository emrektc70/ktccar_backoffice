import View from "./View";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  getGroupes: () => void;
};

const ViewModel: React.FC<Props> = ({ getGroupes }) => {
  useEffect(() => {
    getGroupes();
  }, [getGroupes]);
  return <View />;
};

export default ViewModel;
