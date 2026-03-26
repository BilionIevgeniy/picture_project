import { postData } from "../services/requests";

const message = {
  loading: "Loading...",
  success: "Thank you! We will contact you soon",
  failure: "Something went wrong...",
  spinnerImg: "assets/img/spinner.gif",
  okImg: "assets/img/ok.png",
  failImg: "assets/img/fail.png",
};
const path = {
  designer: "assets/server.php",
  question: "assets/question.php",
};

const forms = () => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    upload = document.querySelectorAll('[name="upload"]');

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
    upload.forEach((item) => {
      item.previousElementSibling.textContent = "File not selected";
    });
  };

  upload.forEach((item) => {
    item.addEventListener("input", () => {
      let dots;
      const arr = item.files[0].name.split(".");
      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      let statusMessage = createStatusMessage();
      item.parentNode.appendChild(statusMessage);
      item.classList.add("animated", "fadeOutUp");

      setTimeout(() => {
        item.style.display = "none";
      }, 400);

      const formData = new FormData(item);
      let api;
      item.closest(".popup-design") || item.classList.contains("calc_form")
        ? (api = path.designer)
        : (api = path.question);

      postData(api, formData)
        .then((res) => {
          statusImg.setAttribute("src", message.okImg);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute("src", message.failImg);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = "block";
            item.classList.remove("fadeOutUp");
            item.classList.add("fadeInUp");
          }, 5000);
        });
    });
  });
};

function createStatusMessage() {
  let statusMessage = document.createElement("div");
  statusMessage.classList.add("status");
  statusMessage.appendChild(createStatusImg());
  statusMessage.appendChild(createTextMessage());
  return statusMessage;
}

function createStatusImg() {
  let statusImg = document.createElement("img");
  statusImg.setAttribute("src", message.spinnerImg);
  statusImg.classList.add("animated", "fadeInUp");
  return statusImg;
}

function createTextMessage() {
  let textMessage = document.createElement("div");
  textMessage.textContent = message.loading;
  return textMessage;
}

export default forms;
