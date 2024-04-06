window.onload = function () {
  const imgs = document.querySelectorAll(".gallery img");
  const overlay = document.querySelector("#overlay");
  const overlayImg = document.querySelector("#overlay-image");
  const body = document.querySelector("body");

  imgs.forEach((img, i) => {
    img.addEventListener("click", function () {
      overlayImg.setAttribute("src", img.getAttribute("src"));
      overlay.style.display = "flex";
      overlayImg.style.display = "block";

      const mediaQuery = window.matchMedia(
        "only screen and (min-width: 640px)"
      );
      if (mediaQuery.matches) {
        body.style.overflow = "hidden";
      }
    });
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
