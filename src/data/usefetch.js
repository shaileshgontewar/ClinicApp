import { useState, useEffect } from "react";
const UseFetch = (config) => {
  const { axiosinstance, url, header } = config;
  const [post, setPost] = useState([]);
  console.log(post);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosinstance.post(url, header);
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return [post];
};

export default UseFetch;
