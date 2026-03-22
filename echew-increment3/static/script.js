let x = 5;
let y = 7;
let z = x + y;

let A = "Hello";
let B = "World";

let C = A + B


console.log(z)
console.log(C)

sumnPrint(x, y)
sumnPrint(A, B )

function sumnPrint(x1, x2) {
    console.log(x1 + x2)
}


if (C.length > z) {
    console.log(C)
    // Nested condition check
    if ( C.length < z) {
        console.log(z)
        // Code block for nested true
    }
    // End of nested check block
} else {
    console.log("Good Job!")
    // Code block for initial condition false
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(array) {
    array.forEach(element => {
        if (element == "Banana"){
            alert("Banana Found!")
        }
    });
}

// findTheBanana(L1)







function greeting(x){
    if(x < 5 || x >= 20){
        greetingTime.innerText = "Good Night"
    }

    else if(x < 12){
        greetingTime.innerText = "Good Morning"
    }

    else if(x < 18){
        greetingTime.innerText = "Good Afternoon"
    } else  {
        greetingTime.innerText = "Good Evening"
    }
}



if (document.getElementById("greetingTime")){
    let now = new Date()
    let hour = now.getHours()
    let greetingTime = document.getElementById("greetingTime")
    greeting(hour)
}

if (window.location.href.includes("index.html")){
    console.log("I'm in index.html!")
}


function addYear(){
    let currentYear = new Date().getFullYear()
    copyYear.innerText = currentYear
}
addYear()