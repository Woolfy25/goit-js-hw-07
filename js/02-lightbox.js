import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesDisplay = Markup(galleryItems);

function Markup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", imagesDisplay);

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 500,
  captionType: "alt",
});
