import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img class= "gallery__image"
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
  const isGalleryEl = event.target.classList.contains("gallery__image");
  if (!isGalleryEl) {
    return;
  }
}
function onOpenModalWindow(e) {
  instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);
  instance.show();
}
//   const gallaryOriginalImg = event.target.dataset.source;
//   const instance = basicLightbox.create(
//     `<img src="${galleryOriginalImg}" width ="800" height ="600">`
//   );
//   instance.show();
// }
console.log(galleryItems);
