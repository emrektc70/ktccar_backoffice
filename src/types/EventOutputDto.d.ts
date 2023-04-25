import { ImageOutputDto } from "./ImageOutputDto";

export interface EventOutputDto {
    id: number;
    name: string;
    image: ImageOutputDto;
    description: string;
    startDate: string;
    finishDate: string;
}