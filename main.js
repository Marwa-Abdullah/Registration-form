 

        const form = document.getElementById("regForm");
        const errBox = document.getElementById("errorMsg");

        form.addEventListener("submit", e => {
            e.preventDefault();

            const fullName = document.getElementById("name").value.trim();
            const emailVal = document.getElementById("email").value.trim();
            const pass = document.getElementById("password").value;
            const confirm = document.getElementById("confirm").value;

            errBox.textContent = "";
       

            if (!fullName || !emailVal || !pass || !confirm) {
                return showError("All fields are required");
            }

            const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!validEmail.test(emailVal)) {
                return showError("Invalid email format");
            }

            if (pass.length < 6) {
                return showError("Password must be at least 6 characters");
            }

            if (pass !== confirm) {
                return showError("Passwords do not match");
            }

            alert("Welcome! Your account has been successfully created");
            form.reset();
        });

        function showError(msg) {
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


            bubble.style.background = 'rgba(176,224,230,0.4)';

           document.body.appendChild(bubble);
        }
   