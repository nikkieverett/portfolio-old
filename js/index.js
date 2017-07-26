
var navLink = document.querySelector('.page-links');
var section = document.querySelector('section');
var scrollButton = document.querySelector('.scroll-arrow');


scrollButton.addEventListener('click', function(evt){
  //TODO: add scroll event when clicked. scroll 100% of viewport height to reveal next section. Also highlight nav with appropriate section. Once bottom of page has been reaced reverse arrow and click causes page to scroll back to top.
});

let url = `file:///Users/nikki_everett/Dev/portfolio/index.html`;
function onHashChange(hash){

  console.log(hash);
}

//adds indicator to current nav bar section selection.
navLink.addEventListener('click', function(evt){
  let previous = document.querySelector('.clicked');
  if(previous !== null){
    previous.classList.remove('clicked');
  }
  if(evt.target.tagName === 'A'){
    evt.target.classList.add('clicked');
    previous = evt.target;
  }
});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  offset: 100, // start scene after scrolling for 100px
  duration: 400 // pin the element for 400px of scrolling
});



// window.addEventListener("scroll", function(){
//   let viewportHeight = window.innerHeight || document.documentElement.offsetHeight;
//   let pageScrollTop = document.body.scrollTop;
//   console.log(pageScrollTop);
//
//   if( pageScrollTop > 670 && pageScrollTop){
//   }
// });
// // document.documentElement.scrollTop ||
//
//
// function changeCurrentNav(evt, currentHash){
//
// }

//778

//

//
// navLink.addEventListener('scroll', function(evt){
//   let previous = document.querySelector('.clicked');
//   if(previous !== null){
//     previous.classList.remove('clicked');
//     console.log('removing class')
//   }
//   if(evt.target.tagName === 'A' || evt.target.tagName === 'LI'){
//     evt.target.classList.add('clicked');
//     previous = evt.target;
//     console.log('adding class');
//
//   }
// });
