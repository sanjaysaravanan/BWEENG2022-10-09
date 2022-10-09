// getElementById

// Dog Area where feed the dog image
var dogArea = document.getElementById('image-area');

function changeDogImage() {
  const changeRequest = new XMLHttpRequest();
  changeRequest.open('GET', 'https://dog.ceo/api/breeds/image/random');
  changeRequest.send(null);
  changeRequest.onload = () => {
    const response = JSON.parse(changeRequest.responseText);
    var imgEle = document.createElement('img');
    // set src attr for the above imgEle
    imgEle.src = response.message;
    imgEle.alt = 'Random Dog';
    imgEle.style.maxHeight = '500px';
    imgEle.style.maxWidth = '500px';
    dogArea.innerHTML = "";
    dogArea.append(imgEle);
  };
}

// invoking once initially
changeDogImage();
