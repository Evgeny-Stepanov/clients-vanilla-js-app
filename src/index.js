import "@babel/polyfill";
import "./index.html";
import "./auth.html";
import "./index.scss";

//import example from "./img/img-png.png";

import { mult, sum } from "./modules/calc";

//const imgWrap = document.querySelector(".img");
//const img = new Image();
//img.src = example;
//imgWrap.append(img);

console.log(sum(5, 5));
console.log(mult(5, 5));

