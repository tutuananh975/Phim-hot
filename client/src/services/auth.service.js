import axios from "axios";

export const registerService = async (user) => {
    const res = await axios.post(`${process.env.host}/api/v1/auth/register`,user);
    return res;
};

export const loginService = async (user) => {
    const res = await axios.post(`${process.env.host}/api/v1/auth/login`,user,{ withCredentials: true});
    return res;
};
