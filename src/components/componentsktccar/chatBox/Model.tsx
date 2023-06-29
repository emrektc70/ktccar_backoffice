import { useCallback } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";


type Props = {
  groupes: any[];
  postGroupeId: (id: number) => void;
  changeMessageFields: ReduxUniversalSetter;
  group_id: number

};

const ViewModel: React.FC<Props> = ({
  groupes,
  postGroupeId,
  changeMessageFields,
  group_id

}) => {

  const navigation = useNavigate()
  const handleClickJoinGroupe = useCallback(
    (id: number) => () => {
      postGroupeId(id);
      navigation(`/chat/${id}/group`)
      changeMessageFields('group_id', id)
    },
    [postGroupeId, navigation, changeMessageFields]
  );


  return (
    <View
      groupes={groupes}
      handleClickJoinGroupe={handleClickJoinGroupe}
    />
  );
};

export default ViewModel;
