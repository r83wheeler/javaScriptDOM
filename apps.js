let mymessage = document.getElementById("input1").value;
console.log("Message is: " + mymessage);

let specialButton = document.getElementById("specialButton");
specialButton.innerHTML = "Click Me Instead";
specialButton.style.padding = "20px";

document.getElementById("mytitle").innerHTML = "New msg";
document.getElementById("mytitle").style.borderColor = "red";

document.querySelector("p");

// let dolphins = (90 + 108 + 89) / 3;
// let koalas = (19 + 109 + 88) / 3;

// console.log(dolphins, koalas);

// if(dolphins > koalas && dolphins >= 100) {
//     console.log("Dolphins win!");
// } else if (koalas > dolphins && koalas >= 100) {
//     console.log("Koalas win!");
// } else if (dolphins === koalas && dolphins >= 100 && koalas >=100) { 
//     console.log("Tied game!");
// } else {
//     console.log("No one wins!");
// }

const job = 'Pentester';


switch(job) {
    case 'software_engineer':
        console.log('JS, TypeScript, Python');
        break;
    case 'QA_engineer':
        console.log('Automation Testing, code coverage, API Testing');
        break;
    case 'Cybersecurity Analyst':
        console.log('Security+, Network+, SQL');
        break;
    case 'Pentester':
        console.log('CEH, Pentest+, Python, Bash Scripting');
        break;
    default:
        console.log("Not a valid occupation.");
}






const day = 'sunday';

switch(day) {
    case 'monday': 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy NYC');
        break;
    default:
        console.log('Not a valid day.')
}

const age = 9;
// age >= 18 ? console.log('I like Bourbon.') :
// console.log('I drink water');

let drink = age >= 18 ? 'Bourbon' : 'Water';

console.log(drink);

console.log(`I enjoy drinking ${age >= 18 ? 'Bourbon' : 'Water'}`);
