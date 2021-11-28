import { store } from "./store.js";

export const api = async (pageNumber) => {
  try {
    store.toggleIsFetching();
    const response = await fetch(`https://swapi.dev/api/people?page=${pageNumber}`);
    const data = await response.json();
    store.toggleIsFetching();
    return data;
  } catch (e) {
    alert(e);
  }
};
