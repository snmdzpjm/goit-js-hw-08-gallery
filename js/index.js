import galleryItems from "./app.js";


const ulGalleryContainer = document.querySelector(".js-gallery");
const modalWindowRef = document.querySelector(".js-lightbox");
const imgModalWindowRef = document.querySelector(".lightbox__image");
const btnCloseModalRef = document.querySelector(".lightbox__button");
const overlayBoxRef = document.querySelector(".lightbox__overlay");


let activeIndex = 0;


const task = galleryItems
  .map(({ preview, original, description }) => {
    return ` 
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  })
  .join(""); 


ulGalleryContainer.insertAdjacentHTML("beforeend", task);

function openModalfn(e) {
    event.preventDefault();
  if (event.target.nodeName === "IMG") {
    modalWindowRef.classList.add("is-open");
    imgModalWindowRef.src = e.target.dataset.source;
  }
}

ulGalleryContainer.addEventListener("click", openModalfn);

function closeModalfn() {
  modalWindowRef.classList.remove("is-open");
  imgModalWindowRef.removeAttribute("src");
}

btnCloseModalRef.addEventListener("click", closeModalfn);

overlayBoxRef.addEventListener("click", closeModalfn);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModalfn();
  }
});


window.addEventListener("keydown", onPressArrow);