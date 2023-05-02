import axios from "axios";

const getLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:3110/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getLogin;
