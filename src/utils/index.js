export const getListFromLocalstorage = () => {
  let list = JSON.parse(localStorage.getItem("LIST"));
  let result = list ? list : [];
  return result;
};
