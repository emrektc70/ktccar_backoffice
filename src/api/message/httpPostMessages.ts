import axios from "axios";

const httpPostMessages = async (data: MessageResponse) => {
    const token = sessionStorage.getItem('token');

    const response = await axios.post(`http://localhost:3110/messages`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export default httpPostMessages;
