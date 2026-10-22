
function showSignup() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById("message").innerText = "";
}

function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("message").innerText = "";
}

function signup(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (password.length < 8) {
        document.getElementById("message").innerText =
            "Password must contain at least 8 characters.";
        return;
    }

    if (password !== confirm) {
        document.getElementById("message").innerText =
            "Passwords do not match!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(user => user.email === email)) {
        document.getElementById("message").innerText =
            "Account already exists!";
        return;
    }

    // Demo only: use a secure backend for real customer accounts.
    users.push({ name: name, email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("message").innerText =
        "Account created successfully! Please sign in.";

    document.getElementById("signup").reset;
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim().toLowerCase();
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    let user = users.find(
        item => item.email === email && item.password === password
    );

    if (user) {
        document.getElementById("message").innerText =
            "Welcome back, " + user.name + "!";
    } else {
        document.getElementById("message").innerText =
            "Incorrect email or password. Please sign up first.";
    }
}

function shopLogin() {
    document.getElementById("message").innerText =
        "Connect this button to your shop or checkout page.";
}
