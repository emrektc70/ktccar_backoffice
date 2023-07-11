import { useEffect, useMemo, useState } from "react";
import View from "./View";
import { jwt_decode } from "jwt-decode-es";

type Props = {
  messageChat: any,
};

const ViewModel: React.FC<Props> = ({
  messageChat,
}) => {

  const [tokenId, setTokenId] = useState(0)

  const token = sessionStorage.getItem('token')

  const tokenDecode = useMemo(() => {
    if (token) {
      return jwt_decode<TokenUser>(token);
    }
    return null;
  }, [token]);

  useEffect(() => {
    if (tokenDecode) {
      setTokenId(tokenDecode.id)
    }
  }, [tokenDecode])

  const checkMessage = useMemo(() => {
    if (messageChat && messageChat.user && messageChat.user.id === tokenId) {
      return true;
    } else {
      return false;
    }
  }, [messageChat, tokenId]);

  const dateString = messageChat.createdAt
  const dateObj = new Date(dateString);
  const heure = dateObj.getHours();
  const minute = dateObj.getMinutes();

  return <View
    messageChat={messageChat}
    checkMessage={checkMessage}
    heure={heure}
    minute={minute}
  />;
};

export default ViewModel;
