import { UserOutDto } from "./UserOutputDto";

export interface GroupOutputDto {
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