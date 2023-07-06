import "./styles.module.scss";
import View from "./View";
import { useEffect } from "react";

type Props = {
  event: any
};

const ViewModel: React.FC<Props> = ({ event }) => {

  return <View event={event} />;
};

export default ViewModel;
