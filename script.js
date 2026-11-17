/*
    My DevSecOps Portfolio

    JavaScript functionality will be added in Week 03 - Day 03.

    Planned topics:
    1. JavaScript basics
    2. Variables and functions
    3. DOM manipulation
    4. Form validation
*/

const welcomeButton = document.getElementById("welcomeButton");

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function () {

    welcomeMessage.textContent =
        "Hello! JavaScript is working successfully!";

});

// Theme switch functionality
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });
}

// Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageField = document.getElementById("message");
        const feedback = document.getElementById("formFeedback");

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        if (name === "") {
            feedback.textContent = "Please enter your name.";
            return;
        }

        if (email === "" || !emailField.checkValidity()) {
            feedback.textContent = "Please enter a valid email address.";
            return;
        }

        if (message === "") {
            feedback.textContent = "Please enter a message.";
            return;
        }

        feedback.textContent =
            "Form validated successfully! No message has been sent.";

        contactForm.reset();
    });
}

console.log("JavaScript loaded successfully!");
