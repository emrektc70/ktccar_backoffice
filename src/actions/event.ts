export const SET_EVENT_FIELDS = "SET_EVENT_FIELDS";
export const GET_EVENT = "GET_EVENT";

export const changeEventFields = (field: string, value: any) => ({
  type: SET_EVENT_FIELDS,
  field,
  value,
});

export const getEvent = () => ({
  type: GET_EVENT,
});
