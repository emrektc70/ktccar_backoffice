import axios from "axios";

const postGroupeId = async (id: number, data: any) => {
    try {
        // const idString = id.toString();
        const token = sessionStorage.getItem('token');
        const response = await axios.post(`http://localhost:3110/group/${id}/subscribe`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default postGroupeId;
