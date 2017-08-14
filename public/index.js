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
  console.log(offset);
  var scroll = self.offsetTop+150;
  console.log(scroll);

  // CSS Transition slide.
  page.style.top = (-offset.height-150-offset.top)+ 'px';
    console.log(page.style.top);

    // console.log('offset.top', offset.top, 'offset.height', offset.height, 'offsetTop', self.offsetTop);

  setTimeout(function () {
    // let position = offset.height-150;
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
