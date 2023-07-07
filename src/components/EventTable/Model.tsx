import { EventOutputDto } from "../../types/EventOutputDto";
import "./styles.module.scss";
import View from "./View";

type Props = {
  event: EventOutputDto
};

const ViewModel: React.FC<Props> = ({ event }) => {


  const dateString = event.finishDate;
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;


  const startDate = event.startDate;
  const dateStart = new Date(startDate);
  const dayStart = dateStart.getDate().toString().padStart(2, "0");
  const monthStart = (dateStart.getMonth() + 1).toString().padStart(2, "0");
  const yearStart = date.getFullYear().toString();
  const startDateFormated = `${dayStart}/${monthStart}/${yearStart}`;

  return <View
    event={event}
    formattedDate={formattedDate}
    startDateFormated={startDateFormated}
  />;
};

export default ViewModel;
