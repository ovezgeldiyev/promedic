// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

var drop = document.getElementById("drop");
var dropBtn = document.getElementById("dropBtn");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  drop.classList.remove("active");
  dropBtn.classList.remove("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    drop.classList.remove("active");
    dropBtn.classList.remove("active");
  }
  if (event.target == drop) {
    drop.classList.remove("active");
    dropBtn.classList.remove("active");
  }
};
dropBtn.onclick = function () {
  drop.classList.toggle("active");
  dropBtn.classList.toggle("active");
};
// menu end

// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= header.clientHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
  drop.classList.remove("active");
  dropBtn.classList.remove("active");
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// slider start
$(".reviewsSlider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    arrows: false,
    dots: true,
    speed: 800,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// slider end

// counter start
const counter = (EL) => {
  const duration = 700; 
  const start = parseInt(EL.textContent, 10); 
  const end = parseInt(EL.dataset.counter, 10); 
  if (start === end) return; 

  const range = end - start; 
  let curr = start; 
  
  const timeStart = Date.now();
  const loop = () => {
    let elaps = Date.now() - timeStart;
    if (elaps > duration) elaps = duration; 
    const frac = elaps / duration; 
    const step = frac * range; 
    curr = start + step; 
    EL.textContent = Math.trunc(curr);
    if (elaps < duration) requestAnimationFrame(loop); 
  };

  requestAnimationFrame(loop); 
};

// counter end


let numbers = document.getElementById("numbers");
if (numbers){
  function scrollCount() {
    if (window.pageYOffset + document.documentElement.clientHeight  - 100 >= numbers.offsetTop) {
      document.querySelectorAll("[data-counter]").forEach(counter);
    } 
  }
  window.onscroll = function () {
    scrollCount();
  };
  
  scrollCount();
}




