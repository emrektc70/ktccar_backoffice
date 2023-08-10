import axios from "axios";

const httpPostMessages = async (data: MessageResponse) => {
  const token = sessionStorage.getItem("token");

  const response = await axios.post(
    `https://ktccarapp-af38166885ff.herokuapp.com/messages`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export default httpPostMessages;
