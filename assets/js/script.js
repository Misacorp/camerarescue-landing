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

//  Set text element to window.innerWidth. Use $max to specify a maximum width.
function setToMaxWidth(el, max) {
  let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style); 

  //  Ratio of optimal font size in px to width in px.
  //  Only applies to currently set font details. Needs to be updated if style changes.
  const T_WIDTH = 864;
  const T_SIZE = 112;
  let ratio = T_SIZE / T_WIDTH;

  if(window.innerWidth > max) {
    el.style.fontSize = ratio * max + "px";
  }
  else {  
    //  Font = ratio * viewport width
    el.style.fontSize = ratio * window.innerWidth + "px";
  }
}


var onDOMReady = function(){
  let main_title = document.getElementsByTagName('h1')[0];
  setToMaxWidth(main_title, 1400);
  window.addEventListener('resize',function() {
    setToMaxWidth(main_title, 1400);
  })
};


if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  onDOMReady();
} else {
  document.addEventListener("DOMContentLoaded", onDOMReady);
}