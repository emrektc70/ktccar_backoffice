import { ImageOutputDto } from "./ImageOutputDto";

declare type EventOutputDto = {
    id: number;
    name: string;
    image: ImageOutputDto;
    description: string;
    startDate: string;
    finishDate: string;
}