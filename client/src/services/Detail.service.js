import axios from "axios";

export const getOneMovie = async (id) => {
  const res = await axios.get(`${process.env.host}/api/v1/youtubeMovie/getOneMovie/${id}`);
  return res.data.data;
};