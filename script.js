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

const nav = document.querySelector("nav")
const hamMenu = document.querySelector(".mobile-nav-toggle")

hamMenu.addEventListener('click', () => {
	visible = nav.getAttribute("data-visible")
	expended = hamMenu.getAttribute("data-expanded")

	if (visible === "false") {
		nav.setAttribute("data-visible", "true")
		hamMenu.setAttribute("data-expanded", "true")
	} else if (visible === "true"){
		nav.setAttribute("data-visible", "false")
		hamMenu.setAttribute("data-expanded", "false")
	}
})
