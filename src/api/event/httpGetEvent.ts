import axios from "axios";

const httpGetEvent = async () => {
  const token = sessionStorage.getItem("token");
  const response = await axios.get(`http://localhost:3110/event`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default httpGetEvent;
