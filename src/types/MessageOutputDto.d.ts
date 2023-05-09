
declare type MessageOutputDto = {
    id: number;
    message: string;
    group: GroupOutputDto;
    user: UserOutputDto;
    isPin: boolean;
    image: string
}