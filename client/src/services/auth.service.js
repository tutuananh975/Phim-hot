import axios from "axios";

export const registerService = async (dataAcc) => {
  const res = await axios.post("http://localhost:5000/api/v1/auth/register",dataAcc)
    // headers: {
    //   "content-type": "application/json",
    // },
//   });
  return res;
};
