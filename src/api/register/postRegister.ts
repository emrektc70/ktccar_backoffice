import axios from "axios";

const postRegsiter = async (data: any): Promise<any> => {
  try {
    const response = await axios.post("http://localhost:3110/user", data);
    return response.data;
  } catch (error) {
    (console.log(error))
  }
};

export default postRegsiter;
