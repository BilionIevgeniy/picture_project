import { calcScroll } from "./helpers";
let activeModal;

let btnPressed = false;
const modals = () => {
  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation .popup-close",
  );
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
  openByScroll(".fixed-gift");
  // showModalByTime(".popup-consultation", 5000);
};

function bindModal(
  triggerSelector,
  modalSelector,
  closeSelector,
  destroy = false,
) {
  const trigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    close = document.querySelector(closeSelector),
    windows = document.querySelectorAll("[data-modal]");

  trigger.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDefault();
      }
      btnPressed = true;
      if (destroy) {
        item.remove();
      }
      removeWindows(windows, true);
      setModal(modal);
    });
  });

  close.addEventListener("click", () => {
    removeWindows(windows);
    resetModal(modal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      removeWindows(windows);
      resetModal(modal);
    }
  });
}

function removeWindows(windows, addClass) {
  windows.forEach((item) => {
    item.style.display = "none";
    addClass && item.classList.add("animated", "fadeIn");
  });
}

function setModal(modal) {
  const scroll = calcScroll();
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scroll}px`;
  activeModal = modal;
}

export function resetModal() {
  if (activeModal) {
    activeModal.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
    activeModal = "";
  }
}

function showModalByTime(selector, time) {
  setTimeout(function () {
    let display;

    document.querySelectorAll("[data-modal]").forEach((item) => {
      if (getComputedStyle(item).display !== "none") {
        display = "block";
      }
    });

    if (!display) {
      setModal(document.querySelector(selector));
    }
  }, time);
}

function openByScroll(selector) {
  window.addEventListener("scroll", () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );

    if (
      !btnPressed &&
      window.scrollY + document.documentElement.clientHeight >= scrollHeight
    ) {
      document.querySelector(selector).click();
    }
  });
}

export default modals;
