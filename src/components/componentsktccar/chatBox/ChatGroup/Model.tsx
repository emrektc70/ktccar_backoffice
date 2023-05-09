import { useCallback } from "react";
import View from "./View";

type Props = {
  postMessages: VoidFunction;
  message: string;
  groupId: string;
  isPin: boolean;
  changeMessageFields: ReduxUniversalSetter
};

const ViewModel: React.FC<Props> = ({ postMessages, message, groupId, isPin, changeMessageFields }) => {

  const url = new URL(window.location.href)
  const pathname = url.pathname;
  const segments = pathname.split('/');
  const numero = segments[segments.length - 2];

  const handleClickMessage = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value
    changeMessageFields('message', value)
  }, [changeMessageFields])

  const handlePostMessages = useCallback(() => {
    console.log(message, groupId, isPin)
    changeMessageFields('groupId', numero)
    changeMessageFields('isPin', false)
    postMessages()
  }, [changeMessageFields])

  return <View
    handlePostMessages={handlePostMessages}
    handleClickMessage={handleClickMessage}
    message={message}
  />;
};

export default ViewModel;
