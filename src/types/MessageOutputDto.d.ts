import { UserOutputDto } from "./UserOutputDto";

export interface MessageOutputDto {
    id: number;
    message: string;
    group: GroupOutputDto;
    user: UserOutputDto;
    isPin: boolean;
    image: string
}