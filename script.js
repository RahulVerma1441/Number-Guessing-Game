let num = parseInt(Math.random()*100+1);

const submit= document.getElementById('submit');
const input = document.getElementById('input');
const guessleft = document.getElementById('guessleft');
const prevguess = document.getElementById('Guesses');
const LorH = document.getElementById('LorH');
const strt =document.getElementById('start');

const p = document.createElement('p');

let previous_g=[];
let play=true;
let num_g=0;

if(play){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const check = parseInt(input.value);
        validate(check);
    })
}

function validate(check){
    if(isNaN(check)){
        alert('Please type a valid number');
    }else if(check<1||check>100){
        alert('Please enter a number between 1 to 100');
    }else{
        previous_g.push(check);
        if(num_g==10||(num_g==9&&check!=num)){
            displaymess(`GAME OVER, The number was ${num}`);
            guessleft.innerHTML = `0`;
            end();
        }else{
            display(check);
            checkwin(check);
        }
    }
}

function display(check){
    input.value='';
    prevguess.innerHTML=`<h2> ${previous_g} </h2>`;
    num_g++;
    guessleft.innerHTML=`${10-num_g}`;
}

function checkwin(check){
    if(check===num){
        displaymess(`Congratulaions!!, You guessed it correct number is ${num}.`);
        end();
    }else if(num-check>0){
        displaymess(`Too low.`);
    }else{
        displaymess(`Too High.`);
    }
}

function displaymess(message){
    LorH.innerHTML=`<h2>${message}</h2>`;
}

function end(){
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<input type="submit" id="newGame" value="Start new Game">`;
    strt.appendChild(p);
    play = false;
    start();
}

function start(){
    console.log('check');
    const newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click', function (e) {
        console.log('check');
        num = parseInt(Math.random() * 100 + 1);
        previous_g = [];
        num_g = 0;
        console.log('check');
        prevguess.innerHTML = '';
        guessleft.innerHTML = `${10 - num_g} `;
        input.removeAttribute('disabled');
        strt.removeChild(p);
        LorH.innerHTML='';
        play = true;
        
    });
}


