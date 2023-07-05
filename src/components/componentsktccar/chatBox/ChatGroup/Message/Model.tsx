import View from "./View";

type Props = {
  messageChat: any,
  id: string
};

const ViewModel: React.FC<Props> = ({ messageChat, id }) => {

  console.log(messageChat)



  return <View messageChat={messageChat} />;
};

export default ViewModel;
