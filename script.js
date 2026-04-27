function validateForm() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (user === "" || pass === "") {
        error.innerText = "All fields are required!";
        return false;
    }

    if (user === "admin" && pass === "1234") {
        alert("Login Successful!");
        return true;
    } else {
        error.innerText = "Invalid credentials";
        return false;
    }
}
