// Script for the first task

//TASK 1
function findAge(){
    let birthYear = prompt('What year were you born in');
    let ageInDays = (2021 - birthYear) * 365; 
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDays + ' days');

    h1.setAttribute('id', 'findAge');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('findAge').remove();

}


//TASK 2
function generateDuck(){
    let img = document.createElement('img');
    let div = document.getElementById('flex-gen-duck');
    img.src = "https://i.imgur.com/ozjwWqC.jpeg";
    div.appendChild(img);
}


//TASK 3
function rpsGame(choice){
    let human_choice, bot_choice;
    human_choice = choice.id;
    bot_choice = numberToChoice(randomInt());
    console.log(bot_choice);
    let results = decideWinner(human_choice, bot_choice);
    console.log(results);
    let message = finalMessage(results[0]);
    console.log(message);
    rpsFrontEnd(human_choice, bot_choice, message);
    
}

function randomInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(human_choice, bot_choice){
    let rps_db ={
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'scissors':0, 'rock':1, 'paper':0.5},
        'scissors': {'scissors':0.5, 'rock':0, 'paper':1},
    }

    let human_score = rps_db[human_choice][bot_choice];
    let bot_score = rps_db[bot_choice][human_choice];
    return [human_score, bot_score];
}

function finalMessage(human_score){
    if(human_score === 0){
        return{'message': 'You lost!', 'color': 'red'};
    }
    else if (human_score === 0.5){
        return{'message': 'You tied!', 'color': 'yellow'};
    }
    else{
        return{'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(human_image, bot_image, end_message){
    let image_db = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    let human_div = document.createElement('div');
    let bot_div = document.createElement('div');
    let message_div = document.createElement('div');

    human_div.innerHTML= "<img src= '" +image_db[human_image] + "' height =150 width=150 style='box-shadow: 0px 10px 50px royalblue'>"
    bot_div.innerHTML= "<img src= '" +image_db[bot_image] + "' height =150 width=150 style='box-shadow: 0px 10px 50px royalblue'>"
    message_div.innerHTML = "<h1 style='color: " + end_message['color'] + "; font-size: 60px; padding: 30px; '>" + end_message['message'] + "</h1>"
    
    document.getElementById('rps').appendChild(human_div);
    document.getElementById('rps').appendChild(message_div);
    document.getElementById('rps').appendChild(bot_div);
}

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
function buttonsCopied(){
    
    let copied = [];
    for (let i=0; i < all_buttons.length; i++){
        copied.push(all_buttons[i].classList[1]);
    }
    return copied;
}

var copied_array = buttonsCopied();
console.log(copied_array);
function buttonColourChange(selected_value){
    var copied_array = buttonsCopied();
    if (selected_value.value === 'red'){
        buttonsRed();
    }
    else if(selected_value.value === 'green'){
        buttonsGreen();
    }
    else if(selected_value.value === 'reset'){
        buttonsReset();
    }
    else{
        randomColours();
    }
}

function buttonsRed(){
    for(let i =0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i =0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsReset(){
    for(let i =0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copied_array[i]);
    }
}

function randomColours(){
    let choices = ['btn-primary','btn-success','btn-danger','btn-warning'];

    for(let i =0; i < all_buttons.length; i++){
        let random_number = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[random_number]);
    }
}