import { useState } from "react";
import View from "./View";

type Props = {};

const ViewModel: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <View />;
};
export default ViewModel;
