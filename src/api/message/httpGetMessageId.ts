import axios from "axios";

const httpGetMessage = async (id: string) => {
    const token = sessionStorage.getItem('token');

    const response = await axios.get(`http://localhost:3110/group/{id}/messages`.replace('{id}', id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export default httpGetMessage;
