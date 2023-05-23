import { useCallback, useEffect } from "react";
import View from "./View";

type Props = {
  postMessages: VoidFunction;
  message: string;
  groupId: string;
  isPin: boolean;
  changeMessageFields: ReduxUniversalSetter;
  messageChat: any;
  getMessages: VoidFunction;
  group_id: number
};

const ViewModel: React.FC<Props> = ({
  postMessages,
  message,
  groupId,
  isPin,
  changeMessageFields,
  messageChat,
  getMessages,
  group_id
}) => {

  useEffect(() => {
    getMessages()
  }, [getMessages, group_id])


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


  console.log(message)


  return (
    <View
      handlePostMessages={handlePostMessages}
      handleClickMessage={handleClickMessage}
      message={message}
      messageChat={messageChat}
    />
  )

};

export default ViewModel;
