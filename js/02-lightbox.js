import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class= "gallery__image"
    src = "${preview}" 
     alt ="${description}"/> 
    </a>`;
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
  const galleryOriginalImg = event.target.dataset.source;

  // const instance = basicLightbox.create(
  // );
  // instance.show();
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
