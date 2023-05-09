import axios from "axios";

const httpGetUser = async (id: string) => {
    try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get("http://localhost:3110/user/{id}".replace('{id}', id), {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default httpGetUser;
