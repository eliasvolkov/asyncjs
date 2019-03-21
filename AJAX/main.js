const btn = document.querySelector('button'),
      span = document.querySelector('span')

btn.addEventListener('click', loadText);

function loadText () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function (){
        if(this.status === 200){
            span.innerHTML = this.responseText;
            console.log(this.responseText);
        }
    }
    xhr.send();
}