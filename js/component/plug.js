export const createPlug = () => {
  const plug = document.createElement("div");
  plug.appendChild(document.createTextNode("Заглушка"));
  plug.id = "plug";
  return plug;
};
