import { ImageOutputDto } from "./ImageOutputDto";

declare type UserOutputDto = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    profile_picture: ImageOutputDto;
}