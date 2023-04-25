import View from "./View";
import { useEffect } from "react";

type Props = {
  groupes: any[];
};

const ViewModel: React.FC<Props> = ({ groupes }) => {
  return <View groupes={groupes} />;
};

export default ViewModel;
