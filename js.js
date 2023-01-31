let div = document.getElementsByTagName('div');
let colors = true;

console.log('div');

// div.addEventListener('click', ()=> {
    
// });

for(let i = 0; i < div.length; i++){
    div[i].addEventListener("click", Click);
}

function Click(){
    if (colors) {
        colors = false;
        this.style.background = 'red';
    } else {
        colors = true;
        this.style.background = 'green';
    }
}
// function redDiv() {
//     let div = document.getElementsByTagName('div').getElementsByClassName.backgroundColor = `rgb(191, 6, 37)`;
// }

// function greenDiv() {
//     let div = document.getElementsByTagName('div').getElementsByClassName.backgroundColor = `rgb(124, 252, 0)`;
// }