export const SET_EVENT_FIELDS = "SET_EVENT_FIELDS";

export const changeEventFields = (field: string, value: any) => ({
    type: SET_EVENT_FIELDS,
    field,
    value,
});

