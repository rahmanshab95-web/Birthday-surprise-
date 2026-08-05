function checkPassword() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (password === "09082006") {
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "surprise.html";
        }, 1000);

    } else {
        error.innerText = "❌ Wrong Password";
    }
}
