

let isOpen = false;

const modal = document.querySelector("#modal-1");
const openButton = document.querySelector("#btn-modal-1");
const modalBackdrop = document.createElement("div");

openButton.addEventListener("click", () => {
    if (!isOpen) {
        openModal();
    } else {
        closeModal();
    }
})

const closeButton = document.querySelector("#close-btn");

const closeModal = (event) => {
    event.stopPropagation(); // evita el bubbling
    console.log("Cerrando modal", event);
    isOpen = false;
    modal.style.display = "none";
    modalBackdrop.remove();
}

const openModal = () => {
    modalBackdrop.classList.add("modal-backdrop");
    document.body.appendChild(modalBackdrop);
    modal.style.display = "block";
    isOpen = true;
}

closeButton.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.body.addEventListener("click", (event) => {
    console.log("Click en el body", event);
});