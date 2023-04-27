import { UserOutDto } from "./UserOutputDto";

declare type GroupOutputDto = {
    id: number;
    createdAt: string;
    groupName: string;
    capacity: number;
    nbMessages: number;
    nbUser: number;
    owner: UserOutDto;
    // pb import
    isPrivate: boolean;
    image: ImageOutputDto;
}