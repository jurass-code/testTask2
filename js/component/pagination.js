export const pagination = (countPage, changePageTable) => {
  const pagination = document.createElement("div");
  pagination.classList.add("pagination");
  for (let i = 1; i <= countPage; i++) {
    const paginationEl = document.createElement("span");
    i === 1 ? paginationEl.classList.add("active") : null;
    paginationEl.appendChild(document.createTextNode(i));
    paginationEl.classList.add("paginationEl");
    pagination.appendChild(paginationEl);
  }
  pagination.addEventListener("click", changePageTable);
  return pagination;
};
