




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
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
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