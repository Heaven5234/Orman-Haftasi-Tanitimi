function getSomeData() {
  alert("denemeye değer");

  let link = document.getElementById("orman-vakiflari");

  if (link != null) {
    console.log(link);

    link.addEventListener("click", getSomeData, false);

    return;
  }

  console.log("there is no element with name = 'orman-vakiflari'");

  return;
}
