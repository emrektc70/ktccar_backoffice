export const POST_MESSAGES = "POST_MESSAGES";
export const SET_MESSAGE_FIELDS = "SET_MESSAGE_FIELDS";
export const GET_MESSAGE = "GET_MESSAGE";

export const changeMessageFields = (field: string, value: any) => ({
  type: SET_MESSAGE_FIELDS,
  field,
  value,
});

export const postMessages = () => ({
  type: POST_MESSAGES,
});

export const getMessages = (id: string) => ({
  type: GET_MESSAGE,
  id,
});
