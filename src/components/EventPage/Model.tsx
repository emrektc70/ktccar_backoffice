import "./styles.module.scss";
import View from "./View";
import { useEffect } from "react";


type Props = {
  event: any[];
  getEvent: VoidFunction
};

const ViewModel: React.FC<Props> = ({ event, getEvent }) => {

  console.log(event);

  useEffect(() => {
    getEvent()
  }, [getEvent])


  return <View
    event={event}
  />;
};

export default ViewModel;
