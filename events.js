const clickBtn = document.createElement('button');

clickBtn.innerText = 'Click Me';

document.body.appendChild(clickBtn);

// clickBtn.setAttribute('onclick', "console.log('Clicking on the button')");


clickBtn.addEventListener('click', () => {
  console.log("Clicking on the button");
  console.log('From Event Listener')
});

clickBtn.addEventListener('mouseover', () => {
  console.log("Hovering on the button");
  console.log('From Event Listener')
});

clickBtn.addEventListener('mouseleave', () => {
  console.log("Leaving the button");
  console.log('From Event Listener')
});

