import axios from "axios";

const postRegsiter = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(
      "https://ktccarapp-af38166885ff.herokuapp.com/user",
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default postRegsiter;
