import axios from "axios";

const httpGetMessage = async (id: string) => {
  const token = sessionStorage.getItem("token");

  const response = await axios.get(
    `https://ktccarapp-af38166885ff.herokuapp.com/group/{id}/messages`.replace(
      "{id}",
      id
    ),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export default httpGetMessage;
