function sobre() {
    window.location.href = 'index.html';
}

function projetos() {
    window.location.href = 'projetos.html';
}

function contatos() {
    window.location.href = 'contatos.html';
}

  function toggleBox() {
    var box = document.getElementById("sobreMim");
    box.classList.toggle("visivel");
  }

  let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
  }

  function moveSlide(step) {
    showSlide(currentSlide + step);
  }

  document.addEventListener("DOMContentLoaded", function() {
    showSlide(0);  // Inicia com o primeiro slide
  });