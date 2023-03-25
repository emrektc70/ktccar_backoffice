export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILURE = "GET_MESSAGES_FAILURE";

export const getMessages = () => ({
  type: GET_MESSAGES,
});

export const getMessagesSuccess = (data: any) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: data,
});

export const getMessagesFailure = (error: any) => ({
  type: GET_MESSAGES_FAILURE,
  payload: error,
});
