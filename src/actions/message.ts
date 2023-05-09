export const POST_MESSAGES = "POST_MESSAGES";
export const SET_MESSAGE_FIELDS = 'SET_MESSAGE_FIELDS';

export const changeMessageFields = (field: string, value: any) => ({
  type: SET_MESSAGE_FIELDS,
  field,
  value
})

export const postMessages = () => ({
  type: POST_MESSAGES,

});
