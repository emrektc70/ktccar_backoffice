import View from "./View";

type Props = {
  title: string;
  icon?: boolean;
  onClick?: () => void
};

const ViewModel: React.FC<Props> = ({ title, icon, onClick }) => {
  return <View
    title={title}
    icon={icon}
    onClick={onClick}
  />;
};

export default ViewModel;
