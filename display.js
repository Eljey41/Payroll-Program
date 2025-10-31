const ID = document.getElementById("idNumber").value;
const LNAME = document.getElementById("lname").value;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();


    const id = document.getElementById("idNumber").value;
    const lname = document.getElementById("lname").value;

    if (id === ID && lname === LNAME) {
        message.textContent = "Login Successful!";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Invalid username or password.";
        message.style.color = "red";
    }
})

