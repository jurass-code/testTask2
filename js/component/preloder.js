export function preloader(isFetching) {
  const preloader = document.createElement("div");
  const img = new Image();
  img.src = "../preloader.svg";
  preloader.appendChild(img);
  preloader.id = "preloader";
  if (isFetching) {
    document.querySelector(".content").appendChild(preloader);
  } else {
    document.querySelector("#preloader").remove();
  }
}
