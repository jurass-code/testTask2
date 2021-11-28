import { preloader } from "./component/preloder.js";
import { api } from "./api.js";
import { table } from "./component/table.js";
import { createPlug } from "./component/plug.js";
import { pagination } from "./component/pagination.js";
import { store } from "./store.js";

const btn = document.querySelector("#request");
const del = document.querySelector("#del");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const doc = document.querySelector(".content");
const plug = createPlug();

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteRowBtn")) e.target.closest("tr").remove();
});

const checkPageSwitcher = (pageNumber, countPage) => {
  if (pageNumber >= countPage) {
    next.disabled = true;
    prev.disabled = false;
  } else if (pageNumber <= 1) {
    next.disabled = false;
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};

const getData = async (state) => {
  next.disabled = prev.disabled = del.disabled = true;
  preloader(true);
  const data = await api(state.pageNumber);
  preloader(false);
  del.disabled = false;
  store.changeCountPage(data.count);
  checkPageSwitcher(state.pageNumber, state.countPage);
  return data;
};

export const changePageTable = async (e) => {
  let state = store.getState();
  if (!state.isFetching) {
    document.querySelector(".active").classList.remove("active");
    switch (e.target.classList[0]) {
      case "next": {
        state.pageNumber < state.countPage ? store.changePageNumber(++state.pageNumber) : null;
        break;
      }
      case "prev": {
        state.pageNumber > 1 ? store.changePageNumber(--state.pageNumber) : null;
        break;
      }
      case "paginationEl": {
        store.changePageNumber(+e.target.innerText);
        break;
      }
      default: {
        break;
      }
    }
    document.querySelector("#table").remove();
    state = store.getState();
    document.querySelectorAll(".paginationEl")[state.pageNumber - 1].classList.add("active");
    const data = await getData(state);
    const newTable = table(data.results);
    doc.appendChild(newTable);
  }
};

const createTable = async () => {
  document.querySelector("#plug").remove();

  btn.disabled = true;
  del.disabled = false;
  const state = store.getState();
  const data = await getData(state);
  const newTable = table(data.results);

  store.changeCountPage(data.count);
  doc.appendChild(pagination(state.countPage, changePageTable));
  doc.appendChild(newTable);
  checkPageSwitcher();
};

const deleteTable = () => {
  store.changeCountPage(0);
  store.changePageNumber(1);
  doc.appendChild(plug);
  document.querySelector("#table").remove();
  document.querySelector(".pagination").remove();
  btn.disabled = false;
  del.disabled = next.disabled = prev.disabled = true;
};

doc.appendChild(plug);

btn.addEventListener("click", createTable);
del.addEventListener("click", deleteTable);
next.addEventListener("click", changePageTable);
prev.addEventListener("click", changePageTable);
