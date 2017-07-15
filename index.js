var navLink = document.querySelector('.page-links');
var section = document.querySelector('section');

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

window.addEventListener("scroll", function(){
  let viewportHeight = window.innerHeight || document.documentElement.offsetHeight;
  let pageScrollTop = document.body.scrollTop;
  console.log(pageScrollTop);

  if( pageScrollTop > 670 && pageScrollTop){
  }
});
// document.documentElement.scrollTop ||


function changeCurrentNav(evt, currentHash){

}

//778

// function onHashChange(hash){
//   console.log(hash);
// }

// let url = `file:///Users/nikki_everett/Dev/portfolio/index.html`;
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
