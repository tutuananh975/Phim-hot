import axios from "axios";

export const registerService = async (dataAcc) => {
  const res = await fetch("http://localhost:5000/api/v1/auth/login", {
    method:"POST",
    body: JSON.stringify({
      dataAcc
    }),
    headers: {
      "content-type": "application/json",
    },
  });
//   console.log("dataACc",JSON.stringify(dataAcc));
console.log(res);
};
