import axios from "axios";

const getLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "https://ktccarapp-af38166885ff.herokuapp.com/auth/login",
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getLogin;
