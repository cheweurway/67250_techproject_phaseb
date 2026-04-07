




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



function addYear(){
    let currentYear = new Date().getFullYear()
    copyYear.innerText = currentYear
}
addYear()





function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    // Iterate over each link
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            // Check if this specific link is for the checkout page
            if (link.href.includes("checkout.html")) {
                // Add the unique checkout class
                link.classList.add("activeCheckout");
            } else {
                // Add the standard active class for all other pages
                link.classList.add("active");
            }
        }
    });
}
ActiveNav();


if (document.getElementById("longIntro")) {
    $("#readLess").click(function(){ 
        $("#longIntro").hide(); // Hide the long introduction text
        $("#readLess").hide();  // Hide the "Read Less" button itself
        $("#readMore").show();  // Show the "Read More" button  

    });
    
    // When the "Read More" button is clicked
    $("#readMore").click(function(){
        $("#longIntro").show();  // Show the long introduction text
        $("#readLess").show();   // Show the "Read Less" button
        $("#readMore").hide();   // Hide the "Read More" button  
    });}


if (document.getElementById("buyTicket")) {
$("#readLess").click(function(){ 
    $("#buyTicket").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

});

// When the "Read More" button is clicked
$("#readMore").click(function(){
    $("#buyTicket").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
});}

function submitPurchase() {
  alert("Your order is received. Thank you for your purchase!");
}


// Responsive navbar toggle for mobile hamburger menu
function ResponsiveNavBar() {
    console.log("in ResponsiveNavBar");
    var nav = document.getElementById('navbar');
    console.log(nav);
    if (nav.className === "nav_bar") {
        console.log("nav.className === 'nav_bar'");
        nav.className += " responsive";
    } else {
        nav.className = "nav_bar";
    }
}



var map = L.map('map').setView([40.448119, -80.003889], 14);
var marker = L.marker([40.448119, -80.003889], {opacity: 1 
}).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);