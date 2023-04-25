import View from "./View";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  getGroupes: () => void;
  groupes: any[];
};

const ViewModel: React.FC<Props> = ({ getGroupes, groupes }) => {
  useEffect(() => {
    getGroupes();
  }, [getGroupes]);

  const groupeName = useMemo(() => {}, []);

  console.log(groupes, "testtt");
  return <View groupes={groupes} />;
};

export default ViewModel;
