document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        if (email && password) {

            alert("Login successful! Welcome to CareerMate AI.");

            window.location.href =
                "dashboard.html";

        } else {

            alert("Please enter email and password.");

        }

    });