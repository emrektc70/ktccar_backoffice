import axios from "axios";

const getGroupe = async () => {
    try {

        const token = sessionStorage.getItem('token');
        const response = await axios.get("http://localhost:3110/group", {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getGroupe;
