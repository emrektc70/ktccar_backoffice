import axios from "axios";

const httpPostMessages = async () => {
    const response = await axios.post(`http://localhost:3110/messages`)
    console.log(response);
};
export default httpPostMessages;
