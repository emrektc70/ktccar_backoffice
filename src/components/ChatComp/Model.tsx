import View from "./View";
import { useEffect } from "react";

type Props = {
  getGroupes: () => void;
  groupes: any[];
  postGroupeId: (id: number) => void;
};

const ViewModel: React.FC<Props> = ({ getGroupes, groupes, postGroupeId }) => {

  console.log(groupes);
  useEffect(() => {
    getGroupes();
  }, [getGroupes]);

  return <View groupes={groupes} postGroupeId={postGroupeId} />;
};

export default ViewModel;
