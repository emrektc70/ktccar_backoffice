import "./styles.module.scss";
import View from "./View";
import { useEffect } from "react";


type Props = {
  events: any[];
  getEvent: VoidFunction
};

const ViewModel: React.FC<Props> = ({ events, getEvent }) => {

  useEffect(() => {
    getEvent()
  }, [getEvent])

  return <View
    events={events}
  />;
};

export default ViewModel;
