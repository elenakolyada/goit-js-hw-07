import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGallaryCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGallaryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery_item">
      <a class="gallery_link" href="${original}">
    <img class= "gallery_image"
    src = "${preview}" 
    data-source = "${original}"
    alt ="${description}" /> 
    </a>
    </div>`;
    })
    .join("");
}
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  const galleryElement = event.target.classList.contains("gallery_image");
  if (!galleryElement) {
    return;
  }

  const galleryOriginalImage = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${galleryOriginalImage}" width ="800" height ="600">`
  );
  instance.show();
}
