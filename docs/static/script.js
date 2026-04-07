




function updateDynamicHeading(hour) {
    const heroTitle = document.querySelector('.hero-title');
    const greetingSubtitle = document.getElementById("greetingTime");
    
    let timeGreeting = "";

    // Determine the string based on hour
    if (hour < 5 || hour >= 20) {
        timeGreeting = "Good Night";
    } else if (hour < 12) {
        timeGreeting = "Good Morning";
    } else if (hour < 18) {
        timeGreeting = "Good Afternoon";
    } else {
        timeGreeting = "Good Evening";
    }

    // 1. Update the Main Heading (h1)
    if (heroTitle) {
        heroTitle.innerText = `${timeGreeting} — Discover America's Greatest Pastime`;
    }

    // 2. Keep your subtitle (h2) logic if you still want it
    if (greetingSubtitle) {
        greetingSubtitle.innerText = `Welcome to the Burger Museum`;
    }
}

// Run the function
if (document.querySelector(".hero-title") || document.getElementById("greetingTime")) {
    let now = new Date();
    let hour = now.getHours();
    updateDynamicHeading(hour);
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
    // Grab the name and total for the alert
    const customerName = document.getElementById('cust-name').value;
    const totalPrice = document.getElementById('total-price').innerText;
    
    alert(`Thank you, ${customerName}! Your order for ${totalPrice} has been received. A confirmation email will be sent shortly.`);
    
    // Optional: Reset the form or redirect after purchase
    // window.location.href = "thankyou.html"; 
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



if (document.getElementById('map')) {
    var map = L.map('map').setView([40.448119, -80.003889], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);
    L.marker([40.448119, -80.003889]).addTo(map);
}


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slideshow');

    if (slider) {
        let isPaused = false;

        setInterval(() => {
            if (!isPaused) {
                const isAtEnd = slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10;
                
                if (isAtEnd) {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
                }
            }
        }, 2000);

        slider.addEventListener('mouseenter', () => isPaused = true);
        slider.addEventListener('mouseleave', () => isPaused = false);
    }
});

function moveSlide(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = slider.offsetWidth; // Gets the width of the visible area
    
    if (direction === 1) {
        // Move Next
        const isAtEnd = slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10;
        if (isAtEnd) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    } else {
        // Move Previous
        const isAtStart = slider.scrollLeft <= 10;
        if (isAtStart) {
            slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }
}


// --- 1. Automatic Price Calculation ---
function calculateTotal() {
    const adultPrice = 18;
    const seniorPrice = 14;
    const teenPrice = 12;

    const adults = parseInt(document.getElementById('qty-adult').value) || 0;
    const seniors = parseInt(document.getElementById('qty-senior').value) || 0;
    const teens = parseInt(document.getElementById('qty-teen').value) || 0;

    const total = (adults * adultPrice) + (seniors * seniorPrice) + (teens * teenPrice);
    document.getElementById('total-price').innerText = "$" + total;
}

// --- 2. Calendar Select Function ---
function selectDate(day) {
    const formArea = document.getElementById("ticket-purchase-area");
    const dateInput = document.getElementById("visitDate");
    
    // Show the form
    formArea.style.display = "block";
    
    // Format the date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    
    dateInput.value = `${year}-${month}-${dayStr}`;
    
    // Smooth scroll to form
    formArea.scrollIntoView({ behavior: 'smooth' });
}

// --- 3. Initialize Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // Call the calendar generator if on checkout page
    if (document.getElementById('scheduleTable')) {
        updateScheduleToCurrentMonth();
    }

    // Add listeners to all number inputs for live calculation
    const inputs = document.querySelectorAll('.calc-input');
    inputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });
});

// Update your  function to use the ID on your page
function updateScheduleToCurrentMonth() {
    const table = document.getElementById("scheduleTable");
    if(!table) return;
    
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = today.getDate();

    let html = `<thead><tr><th colspan="7">${monthNames[month]} ${year} (Click on Date to View Availbility) </th></tr>
                <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead><tbody>`;

    let day = 1;
    for (let week = 0; week < 6; week++) {
        html += "<tr>";
        for (let i = 0; i < 7; i++) {
            if ((week === 0 && i < firstDay) || day > daysInMonth) {
                html += "<td></td>";
            } else {
                // Logic check: Is the day in the past?
                const isPassed = day < currentDay;
                
                // If passed, add "passed" class. Otherwise just "date".
                let className = isPassed ? "date passed" : "date";
                
                // If passed, do NOT add the onclick attribute.
                let clickAttr = isPassed ? "" : `onclick="selectDate(${day})"`;
                
                html += `<td><span class="${className}" ${clickAttr}>${day}</span></td>`;
                day++;
            }
        }
        html += "</tr>";
        if (day > daysInMonth) break;
    }
    html += "</tbody>";
    table.innerHTML = html;
}