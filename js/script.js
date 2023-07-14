// console.log("Hello World")

// const myName = 'Carol Ndunge';
// const h1 = document.querySelector(".heading-primary");
// console.log(h1);
// console.log(myName);


// h1.addEventListener('click', function(){
//   h1.textContent = myname;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem"
// });


//Setting current year
const year =document.querySelector(".year");
const currentYear =new Date().getFullYear();
year.textContent = currentYear;

//Making mobile navigation work

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener('click', function(){
  header.classList.toggle("nav-open");
})

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll  back to the top
    if (href === "#")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    //Scroll to other links
    if (href !== "#" && href.startsWith('#')){
      const section = document.querySelector(href);
      section.scrollIntoView( { behavior:"smooth" });
    }

    //Close mobile navigation
    if (link.classList.contains('main-nav-link'))
    header.classList.toggle("nav-open");
  });
});

//Sticky Navigation
const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function(entries){
  const ent = entries[0];
  console.log(ent);

  if(ent.isIntersecting === false){
    document.body.classList.add("sticky");
  }

  if(ent.isIntersecting === true){
    document.body.classList.remove("sticky");
  }
},
{
  //In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px",
}
);
obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js


