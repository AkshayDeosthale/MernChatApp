import React from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((response) => response.data);

const Chat = () => {
  const { data, error } = useSWR("http://localhost:5000/api/chat/", fetcher, {
    refreshInterval: 5,
  });
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Chat;
