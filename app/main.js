import { Responsive } from "./responsive.js";

function getSomeData() {
    alert("denemeye değer");
    Responsive.callStack();
}

let link = document.getElementById("orman-vakiflari");

console.log(link);

link.addEventListener('click', getSomeData, false);