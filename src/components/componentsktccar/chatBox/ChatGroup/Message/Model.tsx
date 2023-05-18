import View from "./View";
import { useEffect } from "react";

type Props = {
  messageChat: any,
};

const ViewModel: React.FC<Props> = ({ messageChat }) => {

  return <View messageChat={messageChat} />;
};

export default ViewModel;
