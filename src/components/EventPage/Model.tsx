import "./styles.module.scss";
import View from "./View";
import { useCallback, useEffect, useState } from "react";


type Props = {
  events: any[];
  getEvent: VoidFunction
};

const ViewModel: React.FC<Props> = ({ events, getEvent }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    getEvent()
  }, [getEvent])

  const handleClickPopup = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen])

  return <View
    events={events}
    isOpen={isOpen}
    handleClickPopup={handleClickPopup}
  />;
};

export default ViewModel;
