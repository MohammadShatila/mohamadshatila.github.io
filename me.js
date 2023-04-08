// Make the active class changes according to the section viewport

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      navLinks.forEach((link) => link.classList.remove("active"));
      navLink.classList.add("active");
    }
  });
}, {
  threshold: 0.5
});

sections.forEach((section) => { 
  observer.observe(section);
});



const toggleActive = (clickedElement) => {
  // Get all the nav-link elements
  const navLinks = document.querySelectorAll('.nav-link');

  // Remove the active class from all nav-link elements
  navLinks.forEach(navLink => {
    navLink.classList.remove('active');
    navLink.style.color = 'white'; // Set all nav-links color to white
  });

  // Add the active class to the clicked element
  clickedElement.classList.add('active');

  // Change the color of the active button to orange
  clickedElement.style.color = 'orangered';
}
  

// // Make the Home link active with orange color when the website is opened
// window.onload = function() {
//   const homeActive = document.getElementsByClassName('home');
//   toggleActive(homeActive);
// }



window.onload = function () {
  window.scrollTo(0, 0);
}



// Typing Hero
var typed = new Typed(".typing",  {
  strings:["MOHAMMAD SHATILA.", "STUDENT.","FRONT-END DEVELOPER.","A WEB DEVELOPER.","A WEB DESIGHNER."],
  typeSpeed: 70,
  backSpeed: 60,
  loop:true
})


// remove toggle icon and navbar when click navbar

const navbar = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach((link) => {
  link.addEventListener("click", () => {
    navCollapse.classList.remove("show");
   
  });
});

// FOR CAROUSEL

const state = {};
const carouselList = document.querySelector('.card-deck2');
const carouselItems = document.querySelectorAll('.custom-card');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.custom-card');

  if (!isItem || newActive.classList.contains('custom-card_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('custom-card_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}



