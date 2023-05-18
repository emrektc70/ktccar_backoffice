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

};

const ViewModel: React.FC<Props> = ({
  postMessages,
  message,
  groupId,
  isPin,
  changeMessageFields,
  messageChat,
  getMessages
}) => {
  useEffect(() => {
    getMessages()
  }, [getMessages])

  const url = new URL(window.location.href)
  const pathname = url.pathname;
  const segments = pathname.split('/');
  const numero = segments[segments.length - 2];

  const handleClickMessage = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value
    changeMessageFields('message', value)
  }, [changeMessageFields])

  const handlePostMessages = useCallback(() => {
    changeMessageFields('groupId', numero)
    changeMessageFields('isPin', false)
    postMessages()
  }, [changeMessageFields])

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
