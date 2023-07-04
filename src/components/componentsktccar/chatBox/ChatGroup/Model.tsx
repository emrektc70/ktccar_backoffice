import { useCallback, useEffect, useMemo } from "react";
import View from "./View";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

type Props = {
  postMessages: VoidFunction;
  message: string;
  groupId: string;
  isPin: boolean;
  changeMessageFields: ReduxUniversalSetter;
  messageChat: any;
  getMessages: (id: string) => void;
  group_id: number;
  changeGroupeFields: ReduxUniversalSetter;
  groupes: any[];
  effective: number;
  capacity: number;
  groupName: string
};

const ViewModel: React.FC<Props> = ({
  postMessages,
  message,
  groupId,
  isPin,
  changeMessageFields,
  messageChat,
  getMessages,
  group_id,
  changeGroupeFields,
  groupes,
  effective,
  capacity,
  groupName
}) => {

  const { id } = useParams()

  useEffect(() => {
    const idString = group_id.toString();
    if (idString === "0") {
      if (id) {
        const idToString = id.toString();
        getMessages(idToString);
      }
    }
    getMessages(idString);
  }, [getMessages, group_id, id]);


  const handleClickMessage = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value
    changeMessageFields('message', value)
  }, [changeMessageFields])


  const handlePostMessages = useCallback(() => {
    const url = new URL(window.location.href)
    const pathname = url.pathname;
    const segments = pathname.split('/');
    const numero = segments[segments.length - 2];
    changeMessageFields('groupId', numero)
    changeMessageFields('isPin', false)
    postMessages()
  }, [changeMessageFields, postMessages])

  const groupeDetails = useMemo(() =>
    groupes.filter((details) => details.id === group_id),
    [group_id, groupes]);

  useEffect(() => {
    if (groupeDetails && groupeDetails.length > 0) {
      changeGroupeFields('effective', groupeDetails[0]?.nbUser);
      changeGroupeFields('capacity', groupeDetails[0]?.capacity);
      changeGroupeFields('groupName', groupeDetails[0]?.groupName);
    }
  }, [changeGroupeFields, groupeDetails]);

  console.log(capacity)
  return (
    <View
      handlePostMessages={handlePostMessages}
      handleClickMessage={handleClickMessage}
      message={message}
      messageChat={messageChat}
      capacity={capacity}
      effective={effective}
      groupName={groupName}
    />
  )

};

export default ViewModel;
