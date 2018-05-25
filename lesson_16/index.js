let timer;
let isPaused = false;
let second = 1000;
const n = 10;
let num = document.getElementById('p');
let dis = document.getElementById('start');
let interval;
let t = 1;  
let tim = document.querySelector("#p");
  
for (let i = 1; i <= n; i++)
{
    let span = document.createElement('span')
    span.id = `span_${i}`;
    span.innerHTML = i;
    document.body.appendChild(span);

    num.appendChild(span);
    if (i < n) {
    num.appendChild(document.createTextNode(', '));
    }
}

function start() {
 

    
    timer = setInterval(function () {
             
        tim.innerHTML = t++ + ' second ';        

    }, second);    
    dis.setAttribute('disabled', 'true');
}      
function stop() {
    clearInterval(timer);
    num = 0;
    tim.innerHTML = 0 + ' second ';

    dis.removeAttribute('disabled');
}
function pause() {
    // e.preventDefault();
    // e.isPaused = true;


    clearInterval(interval);
-   dis.removeAttribute('disabled');
}



