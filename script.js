function click() {
    let btn = document.querySelector('.btn');
    let body = document.querySelector('body');
    let audio = document.querySelector('#audio');
    btn.onclick = function() {
        body.classList.toggle('on');
        audio.play();
    }
}

// let btn = document.querySelector('.btn');
// console.log(btn);
// btn.onClick = function() {
// }