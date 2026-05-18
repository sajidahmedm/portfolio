let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
 
    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document
            .querySelector('header nav a[href*=' + id + ']')
            .classList.add('active');
        }

    });

};

menuIcon.onclick = () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("bx-menu");

    menuIcon.classList.toggle("bx-x");

};


// ================= EMAILJS =================

// PUBLIC KEY

emailjs.init("_AHFrKEk5RC-TJjtQ");


// CONTACT FORM

document
.getElementById("contact-form")
.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.sendForm(
        "service_zmf0lkk",
        "template_mck41wx",
        this
    )

    .then(() => {

        alert("Message Sent Successfully!");

        document
        .getElementById("contact-form")
        .reset();

    })

    .catch((error) => {

        alert("Failed To Send Message");

        console.log(error);

    });

});
