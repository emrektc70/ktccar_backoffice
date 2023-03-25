import { Dispatch } from "redux";
const API_URL = "url_de_votre_api";

export const getMessages = async () => {
  try {
    const response = await fetch(`${API_URL}/messages`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
