import { postData } from "../services/requests";

const message = {
  loading: "Loading...",
  success: "Thank you! We will contact you soon",
  failure: "Something went wrong...",
  spinnerImg: "assets/img/spinner.gif",
  okImg: "assets/img/ok.png",
  failImg: "assets/img/fail.png",
};

const forms = () => {
  const allForms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    uploads = document.querySelectorAll('[name="upload"]');

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
    uploads.forEach((upload) => {
      upload.previousElementSibling.textContent = "File not selected";
    });
  };

  uploads.forEach((upload) => {
    upload.addEventListener("input", () => {
      let dots;
      const arr = upload.files[0].name.split(".");
      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      upload.previousElementSibling.textContent = name;
    });
  });

  allForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
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

  postData(getUrl(form), formData)
    .then((res) => {
      sentStatus.statusImg.setAttribute("src", message.okImg);
      sentStatus.statusText.textContent = message.success;
    })
    .catch(() => {
      sentStatus.statusImg.setAttribute("src", message.failImg);
      sentStatus.statusText.textContent = message.failure;
    })
    .finally(() => {
      clearInputs();
      setTimeout(() => {
        sentStatus.statusMessage.remove();
        form.style.display = "block";
        form.classList.remove("fadeOutUp");
        form.classList.add("fadeInUp");
      }, 5000);
    });
}

function getUrl(form) {
  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  return form.closest(".popup-design") || form.classList.contains("calc_form")
    ? (api = path.designer)
    : (api = path.question);
}

function createSentStatus() {
  let statusText = createTextMessage();
  let statusImg = createStatusImg();
  let statusMessage = document.createElement("div");
  statusMessage.classList.add("status");
  statusMessage.appendChild(statusImg);
  statusMessage.appendChild(statusText);
  return { statusText, statusImg, statusMessage };
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

export default forms;
