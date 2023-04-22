import axios from "axios";

export const registerService = async (user) => {
    const res = await await axios.post(`${process.env.host}/api/v1/auth/register`,user);
    return res;

};
