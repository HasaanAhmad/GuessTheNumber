console.log("JavaScript Is working.")

let r_num = Math.ceil(Math.random()*10)


function reset(){
    location.reload()
}

function checkNum(){
 let output= document.getElementById("result")
 let guess = document.getElementById("num").value;
    if (guess==r_num){
        output.innerHTML="You Guessed it."
        output.style.color="green"
    }
    else if(guess<r_num){
        output.innerHTML="You Guess is lower."
        output.style.color="red"
    }
    else if(guess > r_num){
        output.innerHTML="You Guess is Higher."
        output.style.color="red"
    }   
}

