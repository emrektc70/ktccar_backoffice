import { SET_AUTHENTICATION_FIELDS } from "../types/authentification";

export const changeAuthentificationFields = (field: "string", value: any) => ({
  type: SET_AUTHENTICATION_FIELDS,
  field,
  value,
});
