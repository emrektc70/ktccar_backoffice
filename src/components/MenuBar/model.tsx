import { useCallback, useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";

type Props = {};

const ViewModel: React.FC<Props> = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const navigateEvent = () => {
    navigate("/événement");
  };
  const navigateChat = () => {
    navigate("/chat");
  };
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateProfil = () => {
    navigate("/profil");
  };

  const handleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <View
      handleOpenMenu={handleOpenMenu}
      navigateHome={navigateHome}
      navigateEvent={navigateEvent}
      navigateChat={navigateChat}
      navigateAbout={navigateAbout}
      navigateProfil={navigateProfil}
      isOpen={isOpen}
    />
  )
}

export default ViewModel;
