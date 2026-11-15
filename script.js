let isAnimating = false;
function showEnvelope() {
    const envelope = document.getElementById("envelope");
    const button = document.getElementById("openButton");

    button.style.display = "none";
    envelope.classList.remove("hidden");
}
function toggleEnvelope() {
    const envelope = document.getElementById("envelope");

    if (isAnimating) return;

    isAnimating = true;

    if (envelope.classList.contains("open")) {
        envelope.classList.remove("letter-out");
        setTimeout(() => {
            envelope.classList.remove("open");

            setTimeout(() => {
                isAnimating = false;
            }, 900);

        }, 1000);
    }
    else {
        envelope.classList.add("open");
        setTimeout(() => {
            envelope.classList.add("letter-out");
            setTimeout(() => {
                isAnimating = false;
            }, 1200);
        }, 1000);
    }
}
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize =(Math.random() * 20 + 15) + "px";
    heart.style.animationDuration =(Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 500);
