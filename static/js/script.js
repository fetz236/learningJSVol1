// Script for the first task

function findAge(){
    var birthYear = prompt('What year were you born in');
    var ageInDays = (2021 - birthYear) * 365; 
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days');

    h1.setAttribute('id', 'findAge');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('findAge').remove();

}