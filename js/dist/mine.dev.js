"use strict";

var i = document.querySelectorAll(".faq .contener_faq section article div"),
    div = document.querySelectorAll(".faq .contener_faq section>div");

i[0].onclick = function () {
  div[0].classList.toggle("show");
  this.classList.toggle("rotat");
};

i[1].onclick = function () {
  div[1].classList.toggle("show");
  this.classList.toggle("rotat");
};

i[2].onclick = function () {
  div[2].classList.toggle("show");
  this.classList.toggle("rotat");
};

i[3].onclick = function () {
  div[3].classList.toggle("show");
  this.classList.toggle("rotat");
};

i[4].onclick = function () {
  div[4].classList.toggle("show");
  this.classList.toggle("rotat");
};

i[5].onclick = function () {
  div[5].classList.toggle("show");
  this.classList.toggle("rotat");
}; // arrow


var arrow = document.querySelector(".design_by .fa-arrow-up");

window.onscroll = function () {
  if (window.pageYOffset <= 300) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "block";
  }
};

arrow.onclick = function () {
  window.scrollTo(0, 0);
};