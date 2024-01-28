window.onload = function() {
  const imgDivs = document.querySelectorAll('.gallery div');

  imgDivs.forEach(div => {
    div.addEventListener('click', function() {
		div.classList.toggle("fullgriditem")
		if (div.classList.contains("fullgriditem")) {
		  div.scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" });
		}
    });
  });
}
