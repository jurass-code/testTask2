const createRow = (tr, { name, height, mass, hair_color, skin_color }, deleteRow = false) => {
  const arrData = [name, height, mass, hair_color, skin_color];
  arrData.forEach((el, index) => {
    let td = tr.insertCell();
    td.appendChild(document.createTextNode(arrData[index]));
  });
  if (deleteRow) {
    const deleteRowBtn = document.createElement("button");
    deleteRowBtn.appendChild(document.createTextNode("del"));
    deleteRowBtn.classList.add("deleteRowBtn");
    tr.insertCell().appendChild(deleteRowBtn);
  }
};

export const table = (arr) => {
  let tbl = document.createElement("table");
  tbl.id = "table";
  let tableHeader = document.createElement("thead");
  let tableBody = document.createElement("tbody");

  let trHeader = tableHeader.insertRow();
  createRow(trHeader, { name: "name", height: "height", mass: "mass", hair_color: "hair color", skin_color: "skin color" });

  arr.forEach((element) => {
    let tr = tableBody.insertRow();
    createRow(tr, element, true);
  });

  tbl.appendChild(tableHeader);
  tbl.appendChild(tableBody);
  return tbl;
};
