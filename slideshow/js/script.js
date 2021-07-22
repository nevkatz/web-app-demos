function changeSlide(e) {
  let id = e.target.href.split("#")[1];

  let slide = document.getElementById(id);

  let prev = document.querySelector(".slide.active");

  if (slide && !slide.className.includes("active")) {
    slide.className += " active";
  }
  if (prev && prev.className.includes("active")) {
    prev.classList.remove("active");
  }
  return;
}

function init() {
  let links = document.querySelectorAll("a");
  [...links].forEach(function (link) {
    link.addEventListener("click", function (e) {
      changeSlide(e);
    });
  });
}
init();
