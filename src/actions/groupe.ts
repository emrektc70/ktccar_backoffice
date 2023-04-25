export const GET_GROUPES = "GET_GROUPES";
export const SET_GROUPE_FIELDS = "SET_GROUPE_FIELDS"

export const changeGroupeFields = (field: string, value: any) => ({
    type: SET_GROUPE_FIELDS,
    field,
    value,
});
export const getGroupes = () => ({
    type: GET_GROUPES,
});
