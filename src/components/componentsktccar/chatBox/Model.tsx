import { useCallback } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";


type Props = {
  groupes: any[];
  postGroupeId: (id: number) => void;
};

const ViewModel: React.FC<Props> = ({ groupes, postGroupeId }) => {

  const navigation = useNavigate()

  const handleClickJoinGroupe = useCallback(
    (id: number) => () => {
      postGroupeId(id);
      navigation(`/chat/${id}/group`)
    },
    [postGroupeId]
  );


  return (
    <View groupes={groupes} handleClickJoinGroupe={handleClickJoinGroupe} />
  );
};

export default ViewModel;
