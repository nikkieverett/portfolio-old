var page = document.querySelector('#page');
var sections = document.getElementsByTagName('section');
// This transition can be defined in the CSS if preferred.
var transition = 'top .8s cubic-bezier(0.77, 0, 0.175, 1)';
page.style.transition = transition;
page.onclick = slideDown;

function slideDown(e) {

  // Delegate.
  if (e.target.className != 'next') {
    return;
  }

  // Prevent firing simultaneously.
  page.onclick = '';
  self = e.target.parentNode;
  var offset = self.getBoundingClientRect();
  var scroll = self.offsetTop;

  // CSS Transition slide.
  page.style.top = (-offset.height-offset.top) + 'px';

  setTimeout(function () {
    // Reposition the real scrollbar.
    page.style.transition = 'none';
    page.style.top = '';
    window.scrollTo(0, offset.height+scroll);
    page.style.transition = transition;
    // Reattach event.
    page.onclick = slideDown;

    // This timeout length should match the CSS animation time (.8s).
  }, 800);
}

// scrollButton.addEventListener('click', function(evt){
//   //TODO: add scroll event when clicked. scroll 100% of viewport height to reveal next section. Also highlight nav with appropriate section. Once bottom of page has been reaced reverse arrow and click causes page to scroll back to top.
// });
//
// let url = `file:///Users/nikki_everett/Dev/portfolio/index.html`;
// function onHashChange(hash){
//
//   console.log(hash);
// }
//
// //adds indicator to current nav bar section selection.
// navLink.addEventListener('click', function(evt){
//   let previous = document.querySelector('.clicked');
//   if(previous !== null){
//     previous.classList.remove('clicked');
//   }
//   if(evt.target.tagName === 'A'){
//     evt.target.classList.add('clicked');
//     previous = evt.target;
//   }
// });
//
// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//   offset: 100, // start scene after scrolling for 100px
//   duration: 400 // pin the element for 400px of scrolling
// });



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
