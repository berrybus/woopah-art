window.onload = function () {
  const imgs = document.querySelectorAll(".gallery img");
  const overlay = document.querySelector("#overlay");
  const overlayImg = document.querySelector("#overlay-image");
  const body = document.querySelector("body");
  const overlayDesc = document.querySelector("#overlay p");

  imgs.forEach((img, i) => {
    img.addEventListener("click", function () {
      overlayImg.setAttribute("src", img.getAttribute("src"));
      overlay.style.display = "flex";
      overlayImg.style.display = "block";
      let text = img.getAttribute("alt");
      if (text == null) {
        text = "No description";
      }
      if (img.hasAttribute("override-date")) {
        text += ", " + img.getAttribute("override-date");
      } else {
        let dateTimestamp = dates[i % dates.length];
        let date = new Date(dateTimestamp);
        text += `, <em>${date.toLocaleDateString()}</em>`;
      }
      overlayDesc.innerHTML = text;
      const mediaQuery = window.matchMedia(
        "only screen and (min-width: 640px)"
      );
      if (mediaQuery.matches) {
        body.style.overflow = "hidden";
      }
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
  1707800400000.0, 1707541200000.0, 1707022800000.0, 1706763600000.0,
  1704949200000.0, 1703826000000.0, 1701406800000.0, 1700802000000.0,
  1700197200000.0, 1697947200000.0, 1696996800000.0, 1696910400000.0,
  1695182400000.0, 1695009600000.0, 1694491200000.0, 1693022400000.0,
  1690171200000.0, 1682222400000.0, 1682222400000.0, 1681272000000.0,
  1680148800000.0, 1679284800000.0, 1675573200000.0, 1674277200000.0,
  1673499600000.0, 1672549200000.0, 1672203600000.0, 1670821200000.0,
  1670216400000.0, 1669611600000.0, 1668574800000.0, 1667797200000.0,
  1667361600000.0, 1666411200000.0, 1660881600000.0, 1659758400000.0,
  1656043200000.0, 1650340800000.0, 1650081600000.0, 1649044800000.0,
  1648353600000.0, 1647835200000.0, 1647748800000.0, 1647748800000.0,
  1646802000000.0, 1646542800000.0, 1645851600000.0, 1644642000000.0,
  1644210000000.0, 1643950800000.0, 1643000400000.0, 1641445200000.0,
  1636520400000.0, 1635825600000.0, 1635134400000.0, 1634961600000.0,
  1631160000000.0, 1629691200000.0, 1629345600000.0, 1628568000000.0,
  1626753600000.0, 1623988800000.0, 1623988800000.0, 1622865600000.0,
  1622779200000.0, 1621396800000.0, 1620619200000.0, 1619582400000.0,
  1618459200000.0, 1615953600000.0, 1615698000000.0, 1614229200000.0,
  1614142800000.0, 1613538000000.0, 1609304400000.0,
];
