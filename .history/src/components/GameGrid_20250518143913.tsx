import apiClient from "../service/api-client";
const GameGrid = () => {
  apiClient.get("/games").then((res) => {
    console.log(res.data);
  });
  return <div></div>;
};

export default GameGrid;
