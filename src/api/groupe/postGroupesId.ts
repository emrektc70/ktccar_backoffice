import axios from "axios";

const postGroupeId = async (id: number, data: any) => {
  try {
    // const idString = id.toString();
    const token = sessionStorage.getItem("token");
    const response = await axios.post(
      `https://ktccarapp-af38166885ff.herokuapp.com/group/${id}/subscribe`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default postGroupeId;
