import renderLayout from "../src/app/layout.js";

const root = document.querySelector("#root");

(function bootup() {
  return root.innerHTML = renderLayout()
}())