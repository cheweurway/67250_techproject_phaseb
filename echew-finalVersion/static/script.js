// script.js — Shared JS for The Burger Museum

// Updates the hero heading based on time of day
function updateDynamicHeading(hour) {
    const heroTitle = document.querySelector('.hero-title');
    const greetingSubtitle = document.getElementById("greetingTime");

    let timeGreeting = "";

    if (hour < 5 || hour >= 20) {
        timeGreeting = "Good Night";
    } else if (hour < 12) {
        timeGreeting = "Good Morning";
    } else if (hour < 18) {
        timeGreeting = "Good Afternoon";
    } else {
        timeGreeting = "Good Evening";
    }

    if (heroTitle) {
        heroTitle.innerText = `${timeGreeting} — Discover America's Greatest Pastime`;
    }

    if (greetingSubtitle) {
        greetingSubtitle.innerText = `Welcome to the Burger Museum`;
    }
}

if (document.querySelector(".hero-title") || document.getElementById("greetingTime")) {
    let now = new Date();
    let hour = now.getHours();
    updateDynamicHeading(hour);
}


// Inserts the current year into the footer copyright notice
function addYear(){
    let currentYear = new Date().getFullYear()
    copyYear.innerText = currentYear
}
addYear()


// Highlights the active nav link based on the current page URL
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            if (link.href.includes("checkout.html")) {
                link.classList.add("activeCheckout");
            } else {
                link.classList.add("active");
            }
        }
    });
}
ActiveNav();


// Read More / Read Less toggle for the homepage intro paragraph
if (document.getElementById("longIntro")) {
    $("#readLess").click(function(){
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });

    $("#readMore").click(function(){
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
}


// Read More / Read Less toggle for the ticket buy section
if (document.getElementById("buyTicket")) {
    $("#readLess").click(function(){
        $("#buyTicket").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });

    $("#readMore").click(function(){
        $("#buyTicket").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
}

// Shows a confirmation alert on ticket form submission
function submitPurchase() {
    const customerName = document.getElementById('cust-name').value;
    const totalPrice = document.getElementById('total-price').innerText;

    alert(`Thank you, ${customerName}! Your order for ${totalPrice} has been received. A confirmation email will be sent shortly.`);

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


// Initializes the Leaflet interactive map on the Visit Info page
if (document.getElementById('map')) {
    var map = L.map('map').setView([40.448119, -80.003889], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);
    L.marker([40.448119, -80.003889]).addTo(map);
}


// Auto-scrolling slideshow; pauses on hover
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

// Manually moves the slideshow one slide forward (1) or backward (-1)
function moveSlide(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = slider.offsetWidth;

    if (direction === 1) {
        const isAtEnd = slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10;
        if (isAtEnd) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    } else {
        const isAtStart = slider.scrollLeft <= 10;
        if (isAtStart) {
            slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }
}


// Calculates the ticket total based on adult/senior/teen quantities
function calculateTotal() {
    const adultPrice = 18;
    const seniorPrice = 14;
    const teenPrice = 35;

    const adults = parseInt(document.getElementById('qty-adult').value) || 0;
    const seniors = parseInt(document.getElementById('qty-senior').value) || 0;
    const teens = parseInt(document.getElementById('qty-teen').value) || 0;

    const total = (adults * adultPrice) + (seniors * seniorPrice) + (teens * teenPrice);
    document.getElementById('total-price').innerText = "$" + total;
}

// Reveals the purchase form and pre-fills the date when a calendar day is clicked
function selectDate(day) {
    const formArea = document.getElementById("ticket-purchase-area");
    const dateInput = document.getElementById("visitDate");

    formArea.style.display = "block";

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');

    dateInput.value = `${year}-${month}-${dayStr}`;

    formArea.scrollIntoView({ behavior: 'smooth' });
}

// On page load: generates the calendar and attaches live price calculation listeners
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('scheduleTable')) {
        updateScheduleToCurrentMonth();
    }

    const inputs = document.querySelectorAll('.calc-input');
    inputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });
});

// Builds the current month's calendar; past dates are greyed out and non-clickable
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
                const isPassed = day < currentDay;
                let className = isPassed ? "date passed" : "date";
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
