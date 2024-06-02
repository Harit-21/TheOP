var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.auto-btn');
let currentSlide = 1;

var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function (activeClass) {
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function () {

      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();

    }, 4000);

  }
  repeater();

}
repeat();

//add an event listener for hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".left").style.left = "0"
})

//add an event listener for close btn
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-100%"
})

//dropdown
$('.dropdown > a').click(function () {
  $(this).parent().siblings().find('li').fadeOut(500);
  return false;
});

//alert close
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () { div.style.display = "none"; }, 600);
  }
}

function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let item = document.querySelectorAll('.filmchoice');
  let l = document.getElementsByTagName('h3');
  for (var i = 0; i <= l.length; i++) {
      let a = item[i].getElementsByTagName('h3')[0];
      let value = a.innerHTML || a.innerText || a.textContent;
      if (value.toUpperCase().indexOf(filter) > -1) {
          item[i].style.display = "";
      }
      else {
          item[i].style.display = "none";
      }
  }
}