function getThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  } else if (systemSettingDark.matches) {
    return "dark";
  } else {
    return "light";
  }
}

function updateColorTheme() {
  // update the button icon
  const newIcon =
    currentThemeSetting == "dark"
      ? `<i class="fa-regular fa-sun"></i>`
      : `<i class="fa-regular fa-moon"></i>`;
  buttons.forEach((button) => {
    button.innerHTML = newIcon;
  });

  const newCta =
    currentThemeSetting === "dark"
      ? "Change to light theme"
      : "Change to dark theme";
  // use an aria-label if you are omitting text on the button
  // and using sun/moon icons, for example
  buttons.forEach((button) => {
    button.setAttribute("aria-label", newCta);
  });

  // update theme attribute on HTML to switch theme in CSS
  html.setAttribute("data-theme", currentThemeSetting);
}

const html = document.querySelector("html");
const nav = document.querySelector(".nav-container");

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = getThemeString({
  localStorageTheme,
  systemSettingDark,
});
const buttons = document.querySelectorAll("[data-theme-toggle]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button click");
    currentThemeSetting = currentThemeSetting === "dark" ? "light" : "dark";
    updateColorTheme();
    // update in local storage
    localStorage.setItem("theme", currentThemeSetting);
    html.style.transition = "background-color 0.2s";
    nav.style.transition = "border-bottom 0.2s";
  });
});
updateColorTheme();

const hamburger = document.querySelector("#hamburger-menu");
const dropdown = document.querySelector("#dropdown-menu");
hamburger.addEventListener("click", (evt) => {
  evt.stopPropagation();
  if (dropdown.style.display == "none" || dropdown.style.display == "") {
    dropdown.style.display = "flex";
    let height = document.querySelector("body>nav").offsetHeight;
    dropdown.style.top = height + 12 + "px";
    hamburger.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
  } else {
    dropdown.style.display = "none";
    hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

document.addEventListener("click", (evt) => {
  let targetEl = evt.target; // clicked element
  do {
    if (targetEl == dropdown || targetEl == hamburger) {
      return;
    }
    // Go up the DOM
    targetEl = targetEl.parentNode;
  } while (targetEl);
  if (dropdown.style.display == "flex") {
    dropdown.style.display = "none";
    hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});
