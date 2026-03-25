const sliders = (slideSelector, direction, prevSelector, nextSelector) => {
  const slides = document.querySelectorAll(slideSelector);
  const interval = false;
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
    slides.forEach((slide) => {
      slide.classList.add("animated");
      slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";
  }

  function nextSlide(n) {
    showSlide((slideIndex += n));
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
    } catch (e) {
      console.warn(e);
    }
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

export default sliders;
