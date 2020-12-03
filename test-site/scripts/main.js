let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sea.jpg') {
        myImage.setAttribute('src', 'images/sunflower.jpg');
    } else {
        myImage.setAttribute('src', 'images/sea.jpg');
    }
}