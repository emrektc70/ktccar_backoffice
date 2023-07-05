import View from "./View";
import { useEffect } from "react";

type Props = {
  title: string
};

const ViewModel: React.FC<Props> = ({ title }) => {
  return <View title={title} />;
};

export default ViewModel;
