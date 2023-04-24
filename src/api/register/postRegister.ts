import axios from "axios";

const postRegsiter = async (data: any): Promise<any> => {
  try {
    console.log(data, 'log data')
    const response = await axios.post("http://localhost:3110/user", data);
    return response.data;
  } catch (error) {
    (console.log(error))
  }
};

export default postRegsiter;
