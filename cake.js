function blowCandle() {
    document.getElementById("cake").innerHTML = "🎂";

    document.getElementById("wish").innerHTML =
    "🎉 Happy Birthday Duggu ❤️<br><br>May all your dreams come true! 🥳✨";

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        window.location.href = "index.html";
    }, 4000);
}
