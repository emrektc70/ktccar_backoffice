import { ImageOutputDto } from "./ImageOutputDto";

export interface UserOutputDto {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    profile_picture: ImageOutputDto;
}