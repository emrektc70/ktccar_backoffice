import axios from "axios";

const getLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
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
