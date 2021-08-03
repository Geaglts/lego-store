const $ = (selector) => document.querySelector(selector);

const button1 = $("#button1");
const button2 = $("#button2");
const button3 = $("#button3");
const modal = $(".modal");

button1.onclick = () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
};

button2.onclick = () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
};

button3.onclick = () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
};
