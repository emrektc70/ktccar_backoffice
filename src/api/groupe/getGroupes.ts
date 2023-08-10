import axios from "axios";

const getGroupe = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(
      "https://ktccarapp-af38166885ff.herokuapp.com/group",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getGroupe;
