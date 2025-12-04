

const form = document.getElementById("regForm");
const errBox = document.getElementById("errorMsg");
const emailInput = document.getElementById("email");

form.addEventListener("submit", e => {
    e.preventDefault();

    const fullName = document.getElementById("name").value.trim();
    const emailVal = emailInput.value.trim()
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    errBox.textContent = "";


    if (!fullName || !emailVal || !pass || !confirm) {
        return showError("All fields are required");
    }

   if (!emailInput.validity.valid) {
        return showError("Please enter a valid email address");
    }

    if (pass.length < 6) {
        return showError("Password must be at least 6 characters");
    }

    if (pass !== confirm) {
        return showError("Make sure both passwords are the same");
    }


    errBox.style.color = "#39ab3cff";
    errBox.textContent = "Account created successfully!..";

    form.reset();
});

function showError(msg) {
    errBox.style.color = "rgb(232, 19, 19)" ;
    errBox.textContent = msg;

}


for (let i = 0; i < 50; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');


    bubble.style.width = 50 + 'px';
    bubble.style.height = 50 + 'px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = (8 + Math.random() * 7) + 's';
    bubble.style.animationDelay = Math.random() * 5 + 's';


    bubble.style.background = 'rgba(172, 228, 235, 0.4)';

    document.body.appendChild(bubble);
}
