export const fetchData = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (Number(data.cod) === 200) {
        return data;
      } else {
        throw new Error(data?.message);
      }
    });
};
