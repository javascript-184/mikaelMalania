// import "./styles/floatingUI.css";
import { computePosition, shift, flip, offset } from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12/+esm";
console.log(flip)
const button = document.querySelector("#button");
const tooltip = document.querySelector("#tooltip");
computePosition(button, tooltip).then(({ x, y }) => {
  Object.assign(tooltip.style, {
    left: `${x}px`,
    top: `${y}px`
  });
});
