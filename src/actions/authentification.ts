export const SET_AUTHENTIFICATION_FIELDS = "SET_AUTHENTIFICATION_FIELDS";
export const POST_LOGIN = "POST_LOGIN";

export const changeAuthentificationFields = (field: string, value: any) => ({
  type: SET_AUTHENTIFICATION_FIELDS,
  field,
  value,
});

export const postLogin = () => ({
  type: POST_LOGIN,
});
