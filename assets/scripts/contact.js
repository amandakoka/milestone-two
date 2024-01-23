/**
 * Code written with the help of EmailJS tutorials and a YouTube tutorial
 * linked in my credits section of my README file
 */

// Selecting HTML elements
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

// EmailJS credentials
const publicKey = "61keFSOdybjYfr23J";
const serviceID = "service_8jxs47h";
const templateID = "template_h1zlstt";

// Initializing EmailJS with the public key
emailjs.init(publicKey);

// Adding a submit event listener to the contact form
contactForm.addEventListener("submit", e => {
    e.preventDefault();

    // Updating the submit button text
    submitBtn.innerText = "Just a Moment..";

    // Collecting input field values
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    }

    // Sending the email using EmailJS
    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            // Handling success - updating button text and clearing input fields
            submitBtn.innerText = "Message Sent Successfully";
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }, (error) => {
            // Handling error - logging to console and updating button text
            console.log(error);
            submitBtn.innerText = "Something went wrong";
        });
});
