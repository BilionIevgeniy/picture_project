/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js"
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active-style");
      this.nextElementSibling.classList.toggle("active-content");
      if (this.classList.contains("active-style")) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ },

/***/ "./src/js/modules/burger.js"
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  // const menuElem = document.querySelector(menuSelector),
  //   burgerElem = document.querySelector(burgerSelector);
  // menuElem.style.display = "none";
  // burgerElem.addEventListener("click", () => {
  //   if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
  //     menuElem.style.display = "block";
  //   } else {
  //     menuElem.style.display = "none";
  //   }
  // });
  // window.addEventListener("resize", () => {
  //   if (window.screen.availWidth > 992) {
  //     menuElem.style.display = "none";
  //   }
  // });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ },

/***/ "./src/js/modules/calc.js"
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);
  let sum = 0;
  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent = "Please select the size and material of the painting";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };
  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ },

/***/ "./src/js/modules/checkTextInputs.js"
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener("keypress", function (e) {
      if (e.key.match(/[^a-zA-Z 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ },

/***/ "./src/js/modules/drop.js"
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const drop = () => {
  // drag *
  // dragend *
  // dragenter - object over dropArea
  // dragexit *
  // dragleave - object outside dropArea
  // dragover - object hovers over dropArea
  // dragstart *
  // drop - object sent to dropArea
  // const fileInputs = document.querySelectorAll('[name="upload"]');
  // ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName) => {
  //   fileInputs.forEach((input) => {
  //     input.addEventListener(eventName, preventDefaults, false);
  //   });
  // });
  // function preventDefaults(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }
  // function highlight(item) {
  //   item.closest(".file_upload").style.border = "5px solid yellow";
  //   item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0, .7)";
  // }
  // function unhighlight(item) {
  //   item.closest(".file_upload").style.border = "none";
  //   if (item.closest(".calc_form")) {
  //     item.closest(".file_upload").style.backgroundColor = "#fff";
  //   } else {
  //     item.closest(".file_upload").style.backgroundColor = "#ededed";
  //   }
  // }
  // ["dragenter", "dragover"].forEach((eventName) => {
  //   fileInputs.forEach((input) => {
  //     input.addEventListener(eventName, () => highlight(input), false);
  //   });
  // });
  // ["dragleave", "drop"].forEach((eventName) => {
  //   fileInputs.forEach((input) => {
  //     input.addEventListener(eventName, () => unhighlight(input), false);
  //   });
  // });
  // fileInputs.forEach((input) => {
  //   input.addEventListener("drop", (e) => {
  //     input.files = e.dataTransfer.files;
  //     let dots;
  //     const arr = input.files[0].name.split(".");
  //     arr[0].length > 6 ? (dots = "...") : (dots = ".");
  //     const name = arr[0].substring(0, 6) + dots + arr[1];
  //     input.previousElementSibling.textContent = name;
  //   });
  // });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drop);

/***/ },

/***/ "./src/js/modules/filter.js"
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnLovers = menu.querySelector(".lovers"),
    btnChef = menu.querySelector(".chef"),
    btnGirl = menu.querySelector(".girl"),
    btnGuy = menu.querySelector(".guy"),
    btnGrandmother = menu.querySelector(".grandmother"),
    btnGranddad = menu.querySelector(".granddad"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    markGirl = wrapper.querySelectorAll(".girl"),
    markLovers = wrapper.querySelectorAll(".lovers"),
    markChef = wrapper.querySelectorAll(".chef"),
    markGuy = wrapper.querySelectorAll(".guy"),
    no = document.querySelector(".portfolio-no");
  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });
    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };
  menu.addEventListener("click", e => {
    let target = e.target;
    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
  btnAll.addEventListener("click", () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener("click", () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener("click", () => {
    typeFilter(markChef);
  });
  btnGuy.addEventListener("click", () => {
    typeFilter(markGuy);
  });
  btnGirl.addEventListener("click", () => {
    typeFilter(markGirl);
  });
  btnGrandmother.addEventListener("click", () => {
    typeFilter();
  });
  btnGranddad.addEventListener("click", () => {
    typeFilter();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ },

/***/ "./src/js/modules/forms.js"
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ "./src/js/modules/modals.js");


const message = {
  loading: "Loading...",
  success: "Thank you! We will contact you soon",
  failure: "Something went wrong...",
  spinnerImg: "assets/img/spinner.gif",
  okImg: "assets/img/ok.png",
  failImg: "assets/img/fail.png"
};
const forms = () => {
  const allForms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    uploads = document.querySelectorAll('[name="upload"]');
  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = "";
    });
    uploads.forEach(upload => {
      upload.previousElementSibling.textContent = "File not selected";
    });
  };
  uploads.forEach(upload => {
    upload.addEventListener("input", () => {
      let dots;
      const arr = upload.files[0].name.split(".");
      arr[0].length > 6 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      upload.previousElementSibling.textContent = name;
    });
  });
  allForms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      let sentStatus = createSentStatus();
      form.parentNode.appendChild(sentStatus.statusMessage);
      form.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        form.style.display = "none";
      }, 400);
      sentData(form, sentStatus, clearInputs);
    });
  });
};
function sentData(form, sentStatus, clearInputs) {
  const formData = new FormData(form);
  (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(getUrl(form), formData).then(res => {
    sentStatus.statusImg.setAttribute("src", message.okImg);
    sentStatus.statusText.textContent = message.success;
  }).catch(() => {
    sentStatus.statusImg.setAttribute("src", message.failImg);
    sentStatus.statusText.textContent = message.failure;
  }).finally(() => {
    clearInputs();
    setTimeout(() => {
      sentStatus.statusMessage.remove();
      form.style.display = "block";
      form.classList.remove("fadeOutUp");
      form.classList.add("fadeInUp");
      (0,_modals__WEBPACK_IMPORTED_MODULE_1__.resetModal)();
    }, 5000);
  });
}
function getUrl(form) {
  const path = {
    designer: "assets/server.php",
    question: "assets/question.php"
  };
  return form.closest(".popup-design") || form.classList.contains("calc_form") ? path.designer : path.question;
}
function createSentStatus() {
  let statusText = createTextMessage();
  let statusImg = createStatusImg();
  let statusMessage = document.createElement("div");
  statusMessage.classList.add("status");
  statusMessage.appendChild(statusImg);
  statusMessage.appendChild(statusText);
  return {
    statusText,
    statusImg,
    statusMessage
  };
}
function createStatusImg() {
  let statusImg = document.createElement("img");
  statusImg.setAttribute("src", message.spinnerImg);
  statusImg.classList.add("animated", "fadeInUp");
  return statusImg;
}
function createTextMessage() {
  let statusText = document.createElement("div");
  statusText.textContent = message.loading;
  return statusText;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ },

/***/ "./src/js/modules/helpers.js"
/*!***********************************!*\
  !*** ./src/js/modules/helpers.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcScroll: () => (/* binding */ calcScroll)
/* harmony export */ });
function calcScroll() {
  let div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

/***/ },

/***/ "./src/js/modules/mask.js"
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Phone number mask template
const PHONE_MASK = "+4 (___) ___ __ __";
// Default digits to use when input is incomplete
const DEFAULT_DIGITS = "4";
const mask = selector => {
  const setCursorPosition = (position, element) => {
    element.focus();
    if (element.setSelectionRange) {
      element.setSelectionRange(position, position);
    } else if (element.createTextRange) {
      const range = element.createTextRange();
      range.collapse(true);
      range.moveEnd("character", position);
      range.moveStart("character", position);
      range.select();
    }
  };
  const applyMask = event => {
    const input = event.target;
    const digitsOnly = input.value.replace(/\D/g, "");
    let maskedValue = digitsOnly;

    // If fewer digits than default, use default
    if (digitsOnly.length <= DEFAULT_DIGITS.length) {
      maskedValue = DEFAULT_DIGITS;
    }

    // Apply the mask
    let digitIndex = 0;
    input.value = PHONE_MASK.replace(/./g, char => {
      if (/[_\d]/.test(char) && digitIndex < maskedValue.length) {
        return maskedValue.charAt(digitIndex++);
      } else if (digitIndex >= maskedValue.length) {
        return "";
      }
      return char;
    });

    // Handle blur event: clear if only default prefix
    if (event.type === "blur") {
      if (input.value === "+4") {
        input.value = "";
      }
    } else {
      // Set cursor to end of input
      setCursorPosition(input.value.length, input);
    }
  };

  // Select and bind event listeners to inputs
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener("input", applyMask);
    input.addEventListener("focus", applyMask);
    input.addEventListener("blur", applyMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ },

/***/ "./src/js/modules/modals.js"
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   resetModal: () => (/* binding */ resetModal)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/modules/helpers.js");

let activeModal;
let btnPressed = false;
const modals = () => {
  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
  openByScroll(".fixed-gift");
  // showModalByTime(".popup-consultation", 5000);
};
function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
  const trigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    close = document.querySelector(closeSelector),
    windows = document.querySelectorAll("[data-modal]");
  trigger.forEach(item => {
    item.addEventListener("click", e => {
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
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      removeWindows(windows);
      resetModal(modal);
    }
  });
}
function removeWindows(windows, addClass) {
  windows.forEach(item => {
    item.style.display = "none";
    addClass && item.classList.add("animated", "fadeIn");
  });
}
function setModal(modal) {
  const scroll = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.calcScroll)();
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scroll}px`;
  activeModal = modal;
}
function resetModal() {
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
    document.querySelectorAll("[data-modal]").forEach(item => {
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
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= scrollHeight) {
      document.querySelector(selector).click();
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ },

/***/ "./src/js/modules/pictureSize.js"
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector("img");
    // something.png => something-1.png
    img.src = img.src.slice(0, -4) + "-1.png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
      p.style.display = "none";
    });
  }
  function hideImg(block) {
    const img = block.querySelector("img");
    // something-1.png => something.png
    img.src = img.src.slice(0, -6) + ".png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
      p.style.display = "block";
    });
  }
  blocks.forEach(block => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ },

/***/ "./src/js/modules/scrolling.js"
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrolling: () => (/* binding */ scrolling)
/* harmony export */ });
function scrolling(upSelector) {
  // const upElem = document.querySelector(upSelector);
  // window.addEventListener("scroll", () => {
  //   if (document.documentElement.scrollTop > 1650) {
  //     upElem.classList.add("animated", "fadeIn");
  //     upElem.classList.remove("fadeOut");
  //   } else {
  //     upElem.classList.add("fadeOut");
  //     upElem.classList.remove("fadeIn");
  //   }
  // });
  // // Scrolling with raf
  // let links = document.querySelectorAll('[href^="#"]'),
  //   speed = 0.3;
  // links.forEach((link) => {
  //   link.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     const hash = this.hash;
  //     if (!hash) return;
  //     let widthTop = document.documentElement.scrollTop,
  //       toBlock = document.querySelector(hash).getBoundingClientRect().top,
  //       start = null;
  //     requestAnimationFrame(step);
  //     function step(time) {
  //       if (start === null) {
  //         start = time;
  //       }
  //       let progress = time - start,
  //         r =
  //           toBlock < 0
  //             ? Math.max(widthTop - progress / speed, widthTop + toBlock)
  //             : Math.min(widthTop + progress / speed, widthTop + toBlock);
  //       document.documentElement.scrollTo(0, r);
  //       if (r != widthTop + toBlock) {
  //         requestAnimationFrame(step);
  //       } else {
  //         location.hash = hash;
  //       }
  //     }
  //   });
  // });
  // Pure js scrolling
  // const element = document.documentElement,
  //       body = document.body;
  // const calcScroll = () => {
  //     upElem.addEventListener('click', function(event) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //         if (this.hash !== '') {
  //             event.preventDefault();
  //             let hashElement = document.querySelector(this.hash),
  //                 hashElementTop = 0;
  //             while (hashElement.offsetParent) {
  //                 hashElementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }
  //             hashElementTop = Math.round(hashElementTop);
  //             smoothScroll(scrollTop, hashElementTop, this.hash);
  //         }
  //     });
  // };
  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //         prevScrollTop,
  //         speed;
  //     if (to > from) {
  //         speed = 30;
  //     } else {
  //         speed = -30;
  //     }
  //     let move = setInterval(function() {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //         if (
  //             prevScrollTop === scrollTop ||
  //             (to > from && scrollTop >= to) ||
  //             (to < from && scrollTop <= to)
  //         ) {
  //             clearInterval(move);
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //         } else {
  //             body.scrollTop += speed;
  //             element.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     }, timeInterval);
  // };
  // calcScroll();
}

/***/ },

/***/ "./src/js/modules/showMoreStyles.js"
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  btn.addEventListener("click", function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResource)("assets/db.json").then(res => createCards(res.styles, wrapper)).catch(error => console.log(error));
    this.remove();
  });
};
function createCards(response, wrapper) {
  response.forEach(({
    src,
    title,
    link
  }) => {
    let card = document.createElement("div");
    card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
    card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>More details</a>
                </div>
            `;
    document.querySelector(wrapper).appendChild(card);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

/***/ },

/***/ "./src/js/modules/sliders.js"
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = (slideSelector, direction, prevSelector, nextSelector) => {
  const slides = document.querySelectorAll(slideSelector);
  let interval = false;
  let slideIndex = 1;
  showSlide(slideIndex, slides);
  addBtnsEventListeners(prevSelector, nextSelector, slides);
  activateAnimation(slides, direction);
  addSlideEventListeners(slides, direction);
  function showSlide(index) {
    if (index > slides.length) {
      slideIndex = 1;
    }
    if (index < 1) {
      slideIndex = slides.length;
    }
    slides.forEach(slide => {
      slide.classList.add("animated");
      slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";
  }
  function nextSlide(n) {
    showSlide(slideIndex += n);
  }
  function activateAnimation(direction) {
    if (direction === "vertical") {
      interval = setInterval(function () {
        nextSlide(1);
        slides[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      interval = setInterval(function () {
        nextSlide(1);
        slides[slideIndex - 1].classList.remove("slideInRight");
        slides[slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }
  function addBtnsEventListeners(prevSelector, nextSelector) {
    try {
      const prevBtn = document.querySelector(prevSelector),
        nextBtn = document.querySelector(nextSelector);
      prevBtn.addEventListener("click", () => {
        nextSlide(-1);
        slides[slideIndex - 1].classList.remove("slideInLeft");
        slides[slideIndex - 1].classList.add("slideInRight");
      });
      nextBtn.addEventListener("click", () => {
        nextSlide(1);
        slides[slideIndex - 1].classList.remove("slideInRight");
        slides[slideIndex - 1].classList.add("slideInLeft");
      });
    } catch (e) {}
  }
  function addSlideEventListeners(direction) {
    slides[0].parentNode.addEventListener("mouseenter", () => {
      clearInterval(interval);
    });
    slides[0].parentNode.addEventListener("mouseleave", () => {
      activateAnimation(direction);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ },

/***/ "./src/js/services/requests.js"
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  // let res = await fetch(url, {
  //     method: "POST",
  //     body: data
  // });
  let promise = new Promise((resolve, rej) => {
    setTimeout(() => {
      const localData = data;
      rej({
        status: 200,
        text: () => Promise.resolve(localData)
      });
    }, 2000);
  });
  let res;
  try {
    res = await promise;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  const textData = await res.text();
  return Object.fromEntries(textData.entries());
};
const getResource = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");













window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".main-slider-item", "vertical");
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(".button-styles", "#styles .row");
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])("#size", "#material", "#options", ".promocode", ".calc-price");
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])(".sizes-block");
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])(".accordion-heading");
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])(".burger-menu", ".burger");
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_12__.scrolling)(".pageup");
  (0,_modules_drop__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map