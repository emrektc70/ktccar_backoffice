import View from "./View";
import { useEffect, useMemo } from "react";

type Props = {
  messageChat: any,
};

const ViewModel: React.FC<Props> = ({ messageChat }) => {
  /* 
    const userMessage = useMemo(() => {
      return messageChat.filter((user: { id: string }) => user.id === messageChat.user.id);
    }, [messageChat]);
   */

  return <View messageChat={messageChat} />;
};

export default ViewModel;
