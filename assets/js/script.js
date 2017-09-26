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