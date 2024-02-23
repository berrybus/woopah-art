window.onload = function () {
  const imgs = document.querySelectorAll(".gallery img");
  const overlay = document.querySelector("#overlay");
  const overlayImg = document.querySelector("#overlay-image");
  const body = document.querySelector("body");
  const overlayDesc = document.querySelector("#overlay p");

  imgs.forEach((img, i) => {
    img.addEventListener("click", function () {
      // let div = img.parentNode;
      // div.classList.toggle("fullgriditem")
      // if (div.classList.contains("fullgriditem")) {
      //   div.scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" });
      // }
      overlayImg.setAttribute("src", img.getAttribute("src"));
      overlay.style.display = "flex";
      overlayImg.style.display = "block";
      let text = img.getAttribute("alt");
      if (text == null) {
        text = "No description";
      }
      let dateTimestamp = dates[i % dates.length];
      let date = new Date(dateTimestamp);
      text += `, <em>${date.toLocaleDateString()}</em>`;
      overlayDesc.innerHTML = text;
      body.style.overflowY = "";
      body.style.overflow = "hidden";
    });
  });

  document
    .querySelector("#overlay-desc")
    .addEventListener("click", function (e) {
      e.stopPropagation();
    });

  overlayImg.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    body.style.overflow = "";
    body.style.overflowY = "scroll";
    overlayImg.setAttribute("src", "");
  });
};

const dates = [
  1707800400000.0, 1705813200000.0, 1704949200000.0, 1704258000000.0,
  1703739600000.0, 1703653200000.0, 1703653200000.0, 1701320400000.0,
  1700370000000.0, 1700197200000.0, 1697428800000.0, 1697083200000.0,
  1696996800000.0, 1696824000000.0, 1696737600000.0, 1696392000000.0,
  1695268800000.0, 1693972800000.0, 1693886400000.0, 1693800000000.0,
  1693108800000.0, 1692849600000.0, 1691985600000.0, 1691726400000.0,
  1691294400000.0, 1690862400000.0, 1689825600000.0, 1688875200000.0,
  1688788800000.0, 1688443200000.0, 1687665600000.0, 1687492800000.0,
  1686974400000.0, 1686196800000.0, 1686110400000.0, 1686110400000.0,
  1684900800000.0, 1684728000000.0, 1682308800000.0, 1682049600000.0,
  1681272000000.0, 1681272000000.0, 1680580800000.0, 1679544000000.0,
  1679025600000.0, 1678766400000.0, 1678251600000.0, 1677387600000.0,
];
