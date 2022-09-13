const firstName = document.querySelector("#first-name");
const lastName = document.queryCommandValue("#last-name");
const email = document.querySelector("email");
const password = document.querySelector("password");
const form = document.querySelector("#form");

const inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputValues = [];

    for(let input of inputs) {

        // if input is empty change background color to red and show error message
        if(input.value === ""){
            input.style.borderColor = "red";
            input.nextElementSibling.classList.remove("hidden");

            // if input is filled remove error message and change color back to black
        } else {
            input.nextElementSibling.classList.add("hidden");
            input.style.borderColor = "black";
            inputValues.push(input.value);
        }

        // if all inputs are filled empty the form
        if(inputValues.length === 4) {
            for(let input of inputs) {
                input.value = "";
            }
        }
    }
});