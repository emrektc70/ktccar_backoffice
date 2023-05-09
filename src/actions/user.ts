export const SET_USER_FIELDS = "SET_USER_FIELDS";
export const GET_USER_ID = "GET_USER_ID";

export const changeUserFields = (field: string, value: any) => ({
    type: SET_USER_FIELDS,
    field,
    value,
});

export const getUserId = (id: string) => ({
    type: GET_USER_ID,
    id
});
