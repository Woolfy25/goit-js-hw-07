import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesDisplay = Markup(galleryItems);

function Markup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original.value}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", imagesDisplay);

const clickContainer = (element) => {
  element.preventDefault();
  if (element.target.classList.contains("gallery")) return;
  const target = element.target.dataset.source;

  const instanceBox = basicLightbox.create(`
    <img src="${target}"width="800" height="600">`);

  instanceBox.show();
};

galleryContainer.addEventListener("click", clickContainer);
