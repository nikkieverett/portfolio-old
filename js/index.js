var navbar = document.querySelector('#page-break-first');
var section = document.querySelector('section');
var scrollButton = document.querySelector('.scroll-arrow');

$(function() {
  var $window = $(window),
    win_height_padded = $window.height() * 1.1;

  $window.on("scroll", revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
      win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function() {
      var $this = $(this),
        offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data("timeout")) {
          window.setTimeout(function() {
            $this.addClass("animated " + $this.data("animation"));
          }, parseInt($this.data("timeout"), 10));
        } else {
          $this.addClass("animated " + $this.data("animation"));
        }
      }
    });
    // Hidden...
    $(".revealOnScroll.animated").each(function(index) {
      var $this = $(this),
        offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass("animated fadeInUp flipInX lightSpeedIn");
      }
    });
  }
  revealOnScroll();
});

window.addEventListener('scroll', function(){
  let scrollYPos= document.body.scrollTop;
  if(scrollYPos >= 686){
    navbar.classList.add('fixed');
  }
  console.log(document.body.scrollTop);
});

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
