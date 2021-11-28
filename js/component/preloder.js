export function preloader(isFetching) {
  const preloader = document.createElement("div");
  const img = new Image();
  img.src = "./testTask2/assets/preloader.svg";
  preloader.appendChild(img);
  img.alt = "preloader";
  preloader.id = "preloader";
  if (isFetching) {
    document.querySelector(".content").appendChild(preloader);
  } else {
    document.querySelector("#preloader").remove();
  }
}
