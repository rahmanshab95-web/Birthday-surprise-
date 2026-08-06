function blowCandle() {

    document.querySelector(".flame").style.display = "none";

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        alert("🎉 Happy Birthday Duggu! Make a Wish! ❤️");
    }, 500);

    setTimeout(() => {
        window.location.href = "index.html";
    }, 4000);
}
