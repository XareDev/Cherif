const header = document.querySelector("header");
const logo = document.querySelector("#logo")
const sectionOdd = document.querySelector("#Home");

const sectionOneOptions = {
  rootMargin: "-50px 0px 0px 0px"
};

const sectionOddObserver = new IntersectionObserver(function(entries, sectionOddserver) 
{
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        logo.setAttribute("src", "logo-white.png")
    } else {
        header.classList.remove("nav-scrolled");
        logo.setAttribute("src", "logo.png")
    }
  });
}, sectionOneOptions);

sectionOddObserver.observe(sectionOdd)

var options = {
  


};

var typed = new Typed('#typed-s', {strings: [
  'Happy Birthday Cherif!!',
  'Happy Birthday Skander!!',
  'Have a great day!!'
  ],  
  typeSpeed: 60,
  loop: true,
  showCursor: false,
  backSpeed: 60
});



var typed = new Typed('#About-type', {strings: [
  "He's a Pro Gamer!!",
  "He's a Outaku!!",
  "He's a Goat!!",
  "He's Cherif Skander!!"
  ],  
  typeSpeed: 60,
  loop: true,
  showCursor: false,
  backSpeed: 60
});

const overlay = document.querySelectorAll(".card-overlay")

overlay.forEach(e => {
  e.addEventListener("click", (event) => {
    var hide_status = e.getAttribute("data-hide")
    if (hide_status === "false") {
      e.setAttribute("data-hide", "true")
    }
  })
});

var reset_btn = document.querySelector("#reset-btn")
reset_btn.addEventListener("click", (event) => {
  overlay.forEach(e => {

      var hide_status = e.getAttribute("data-hide")
      if (hide_status === "true") {
        e.setAttribute("data-hide", "false")
      }
      else {
        console.log(1)
      }
    }
  );
  }
)