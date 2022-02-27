"use strict";

const form = document.querySelector("#contact__form"),
    firstName = document.querySelector("#first-name"),
    lastName = document.querySelector("#last-name"),
    email = document.querySelector("#email"),
    message = document.querySelector("#message"),
    emailResponse = document.querySelector(".form__response");

const clearForm = () => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
};

const formValidation = () => {
    let errorsList = [];

    const checkTextInput = (input, min, max) => {
        if (input.value.length === 0) {
            showError(input, "require", min, max);
        } else if (input.value.length < 3) {
            showError(input, "min", min, max);
        } else if (input.value.length > 35) {
            showError(input, "max", min, max);
        } else {
            removeError(input);
        }
    };

    const createElement = (input, errorText) => {
        const errorMsg = document.createElement("p");
        errorMsg.textContent = errorText;
        errorMsg.classList.add("error-message");

        if (!input.parentElement.querySelector(".error-message")) {
            input.parentElement.appendChild(errorMsg);
        } else {
            input.parentElement.querySelector(".error-message").textContent =
                errorText;
        }
    };

    const removeError = (input) => {
        if (input.parentElement.querySelector(".error-message") !== null) {
            input.parentElement.querySelector(".error-message").remove();
            input.classList.remove("input-error");
        }
    };

    const showError = (input, text, min, max) => {
        let errorText = "";
        errorsList.push(false);

        switch (text) {
            case "require":
                errorText = "To pole jest wymagane";
                break;
            case "min":
                errorText = `Minimalna ilość znaków: ${min}.`;
                break;
            case "max":
                errorText = `Maksymalna ilość znaków: ${max}.`;
                break;
        }

        createElement(input, errorText);
        input.classList.add("input-error");
    };

    checkTextInput(firstName, 3, 35);
    checkTextInput(lastName, 3, 35);
    checkTextInput(email, 3, 35);
    checkTextInput(message, 3, 35);

    return errorsList.length === 0 ? true : false;
};

const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value,
    };

    if (formValidation()) {
        emailjs
            .send("service_ae53m8u", "template_8lq97w8", templateParams)
            .then(
                function (response) {
                    emailResponse.textContent = "Wiadomość wysłana";
                    emailResponse.classList.add("response-active");
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    emailResponse.textContent =
                        "Nie udało się wysłać Twojej wiadomości.";
                    emailResponse.classList.add("response-active");
                    console.log("FAILED...", error);
                }
            );
        clearForm();
    }
};

form.addEventListener("submit", sendEmail);
