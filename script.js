const firstName = document.querySelector("#first-name");
const lastName = document.queryCommandValue("#last-name");
const email = document.querySelector("email");
const password = document.querySelector("password");
const form = document.querySelector("#form");

const inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    for(let input of inputs) {
        console.log(input.value);

        // if input is empty change background color to red and show error message
        if(input.value === ""){
            input.style.borderColor = "red";
            console.log(input.nextElementSibling);
            input.nextElementSibling.classList.remove("hidden");

            // if input is filled remove error message and change color back to black
        } else {
            input.nextElementSibling.classList.add("hidden");
            input.style.borderColor = "black";
        }
    }
});