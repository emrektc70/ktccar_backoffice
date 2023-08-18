import { useCallback, useEffect, useMemo, useState } from "react";
import View from "./View";
import { useParams } from "react-router-dom";

type Props = {
  postMessages: VoidFunction;
  message: string;
  changeMessageFields: ReduxUniversalSetter;
  messageChat: any;
  getMessages: (id: string) => void;
  group_id: number;
  changeGroupeFields: ReduxUniversalSetter;
  groupes: any[];
  effective: number;
  capacity: number;
  groupName: string;
  createDate: string | number;
  nameCreatePersonne: string
};

const ViewModel: React.FC<Props> = ({
  postMessages,
  message,
  changeMessageFields,
  messageChat,
  getMessages,
  group_id,
  changeGroupeFields,
  groupes,
  effective,
  capacity,
  groupName,
  createDate,
  nameCreatePersonne

}) => {

  const { idUrl } = useParams()
  const [isOpen, setOpen] = useState<boolean>(false)
  const [inputContent, setInPutContent] = useState<boolean>(false)
  const [loader, setLoader] = useState<boolean>(false)

  useEffect(() => {
    if (group_id) {
      setLoader(group_id ? true : false)
    }
  }, [group_id])

  useEffect(() => {
    const idString = group_id.toString();
    if (idString === "0") {
      if (idUrl) {
        const idToString = idUrl.toString();
        getMessages(idToString);
      }
    }
    getMessages(idString);
  }, [getMessages, group_id, idUrl]);


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

  const dateGroupe = useMemo(() => {
    if (!groupeDetails || groupeDetails.length === 0) {
      window.location.href = '/chat';
      return ''; // Valeur par défaut ou vide
    }
    const date = groupeDetails[0].createdAt;
    const formatedDate = new Date(date);
    const day = formatedDate.getDate().toString().padStart(2, '0');
    const month = (formatedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = formatedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }, [groupeDetails]);




  useEffect(() => {
    if (groupeDetails && groupeDetails.length > 0) {
      changeGroupeFields('effective', groupeDetails[0]?.nbUser);
      changeGroupeFields('capacity', groupeDetails[0]?.capacity);
      changeGroupeFields('groupName', groupeDetails[0]?.groupName);
      changeGroupeFields('createDate', dateGroupe)
      changeGroupeFields('nameCreatePersonne', groupeDetails[0]?.owner.username);
    }
  }, [changeGroupeFields, dateGroupe, groupeDetails]);

  const handleClickPopup = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen])


  useEffect(() => {
    if (message.length === 0 || message.length > 255) {
      setInPutContent(true)
    } else {
      setInPutContent(false)
    }
  }, [message, inputContent])


  return (
    <View
      handlePostMessages={handlePostMessages}
      handleClickMessage={handleClickMessage}
      message={message}
      messageChat={messageChat}
      capacity={capacity}
      effective={effective}
      groupName={groupName}
      isOpen={isOpen}
      handleClickPopup={handleClickPopup}
      createDate={createDate}
      nameCreatePersonne={nameCreatePersonne}
      inputContent={inputContent}
      loader={loader}
    />
  )

};

export default ViewModel;
