import View from "./View";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  getGroupes: () => void;
  groupes: any[];
  postGroupeId: (id: number) => void;
};

const ViewModel: React.FC<Props> = ({ getGroupes, groupes, postGroupeId }) => {
  useEffect(() => {
    getGroupes();
  }, [getGroupes]);

  const groupeName = useMemo(() => {}, []);

  console.log(groupes, "testtt");
  return <View groupes={groupes} postGroupeId={postGroupeId} />;
};

export default ViewModel;
