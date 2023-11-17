window.onload = function() {
  const imgs = document.querySelectorAll('.gallery img');
  const fullPage = document.querySelector('#fullpage');
  const bigImg = document.querySelector('#bigimg');

  imgs.forEach(img => {
    img.addEventListener('click', function() {
      fullPage.style.display = 'flex';
      bigImg.setAttribute('src', img.getAttribute('src'));
    });
  });

  bigImg.addEventListener('click', function() {
    fullPage.style.display = 'none';
  })
  fullPage.addEventListener('click', function() {
    fullPage.style.display = 'none';
  })
}
