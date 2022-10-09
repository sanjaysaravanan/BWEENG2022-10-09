// alert
// alert('ALert the user');

// using as window attribute
// window.alert('Alerting');


// prompt ---> interface to get an from user
// returns a string
// var userName = prompt('Enter Your Name');
// console.log(userName);


// confirm ---> confirming an action
// returns a boolean

// var boolVal = confirm('Do You want to proceed?');
// console.log(boolVal);

// Storage ---> 

// is a key value pair storage that a browser provides in order to maintian/keep track of something
// localstorage
// store a value
// localStorage.setItem('batch', 'B39WEENG');


// setTimeout

function logout(fname, lname) {
  console.log("Logging out the user:", fname, lname);
}


// execute above after 15 secs

// setTimeout(() => {
//   logout();
// }, 15000);


// setTimeout(logout, 3000);

// passing desired to the function execution
// setTimeout(() => {
//   logout('Sanjay', "Saravanan");
// }, 3000);


// console.log('Line One');

// asynchronous programm that will stop logout from execution for 3 secs
// setTimeout(logout, 3000, 'Sanjay', 'Saravanan'); // logout(...arguements);


// meanwhile these normal lines will get executed 
// console.log('Line Two');


// var timoutId = setTimeout(() => {
//   console.log("No user interaction found");
//   console.log('Logging out the user');
// }, 5000);


// const cancelLogout = () => {
//   // clearing a timeout
//   clearTimeout(timoutId);
//   timoutId = setTimeout(() => {
//     console.log("No user interaction found");
//     console.log('Logging out the user');
//   }, 5000);
// };

// var intervalId = setInterval(() => {
//   console.log('Ringing the Bell')
// }, 2000);

var count = 0;

const ringBell = () => {
  console.log('Ringing the Bell');
  console.log(`Ring ${count}`);
  count++;
}

var intervalId = setInterval(ringBell, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 20000);








