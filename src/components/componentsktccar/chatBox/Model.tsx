import { useCallback } from "react";
import View from "./View";

type Props = {
  groupes: any[];
  postGroupeId: (id: number) => void;
};

const ViewModel: React.FC<Props> = ({ groupes, postGroupeId }) => {
  const handleClickJoinGroupe = useCallback(
    (id: number) => () => {
      //const idGroupe = groupes.find((item) => item.id);
      console.log("hello", id);
      postGroupeId(id);
    },
    [postGroupeId]
  );

  console.log(groupes);

  return (
    <View groupes={groupes} handleClickJoinGroupe={handleClickJoinGroupe} />
  );
};

export default ViewModel;
