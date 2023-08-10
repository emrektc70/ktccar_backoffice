import axios from "axios";

const httpGetEvent = async () => {
  const token = sessionStorage.getItem("token");
  const response = await axios.get(
    `https://ktccarapp-af38166885ff.herokuapp.com/event`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export default httpGetEvent;
