export function preloader(isFetching) {
  const preloader = document.createElement("div");
  const img = new Image();
  img.src = "./assets/preloader.svg";
  preloader.appendChild(img);
  preloader.id = "preloader";
  if (isFetching) {
    document.querySelector(".content").appendChild(preloader);
  } else {
    document.querySelector("#preloader").remove();
  }
}
