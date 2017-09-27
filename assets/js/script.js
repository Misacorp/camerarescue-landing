let buttons = document.getElementsByClassName('btn');

for(let i = 0; i < buttons. length; i++) {
  //  Mouseover handler
  buttons[i].addEventListener("mouseover", function() {
    let parent = buttons[i].parentElement;
    let p = parent.getElementsByTagName('p');
    p[0].classList.add('active');
  });

  //  Mouseout handler
  buttons[i].addEventListener("mouseout", function() {
    let parent = buttons[i].parentElement;
    let p = parent.getElementsByTagName('p');
    p[0].classList.remove('active');
  });
}




window.onscroll = function() {
  window.requestAnimationFrame(revealHiddenContents);
}


function revealHiddenContents() {
  let sections = document.getElementsByClassName('reveal');
  for(let i = 0; i < sections.length; i++) {
    if(isInViewport(sections[i])) {
      sections[i].classList.remove('hiding');
    }
  }
}

var onDOMReady = function(){
  let sliders = document.getElementsByClassName('slide');
  //  Remove slide-left and slide-right classes.
  for(let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove('slide-left');
    sliders[i].classList.remove('slide-right');
  }
  //  Reveal content in viewport
  revealHiddenContents();
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", onDOMReady);
}




function isInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    //  Get element's dimensions.
    var rect = el.getBoundingClientRect();

    //  How much the container needs to be inside the viewport
    let threshold = 200;

    let viewport_top = 0;
    let viewport_bot = viewport_top + window.innerHeight;

    //  Get height of viewport and container.
    let viewport_height = viewport_bot - viewport_top;
    let rect_height = rect.bottom - rect.top;

    //  Declare some booleans.
    let top_inside, bot_inside;

    //  Viewport is smaller than container.
    if(viewport_height <= rect_height) {
      //  Check if viewport edges are inside container.
      top_inside = rect.top <= viewport_top && viewport_top <= rect.bottom;
      bot_inside = rect.top <= viewport_bot && viewport_bot <= rect.bottom;

      return (top_inside || bot_inside);
  }

  //  Container is smaller than viewport.
  else {
    //  Check if container edges are inside viewport.
      top_inside = viewport_top + threshold < rect.top && rect.top < viewport_bot;
      bot_inside = viewport_top < rect.bottom && rect.bottom < viewport_bot;

      return (top_inside || bot_inside);
  }
}