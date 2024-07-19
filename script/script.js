function slider(targetImgSrc){
    document.querySelector('.guarana').src = `./images/${targetImgSrc}`;
}

function changeBg(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}