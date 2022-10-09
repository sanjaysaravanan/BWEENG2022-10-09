const gP = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Bubbling

// document.addEventListener('click', e => {
//   console.log('document')
// })

// gP.addEventListener('click', e => {
//   console.log("grandparent 1");
// });

// parent.addEventListener('click', e => {
//   console.log("parent 1");
// });

// child.addEventListener('click', e => {
//   console.log("child 1");
// });




// Capturing
document.addEventListener('click', e => {
  console.log('document')
}, { capture: true })

gP.addEventListener('click', e => {
  console.log("grandparent 1");
}, { capture: true });

parent.addEventListener('click', e => {
  console.log("parent 1");
}, { capture: true });

child.addEventListener('click', e => {
  console.log("child 1");
}, { capture: true });
