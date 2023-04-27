import axios from "axios";

const postGroupeId = async (id: number) => {
    try {
        const idString = id.toString();
        const token = sessionStorage.getItem('token');
        const response = await axios.post("http://localhost:3110/group/{id}/subscribe".replace('{id}', idString),
            {

            });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default postGroupeId;
