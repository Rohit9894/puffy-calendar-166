export const getup = () => {
  return fetch("http://localhost:3004/help_up").then((res) => res.json);
};
export const getdown = () => {
  return fetch("http://localhost:3004/head_down").then((res) => res.json);
};
