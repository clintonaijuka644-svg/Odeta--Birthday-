let giftOpening = false;
function openGift() {
if (giftOpening) return;
giftOpening = true;
    let countdown = document.getElementById("countdown");
    let number = 4;

    countdown.style.display = "block";
    countdown.textContent = number;
     let voice = new SpeechSynthesisUtterance(number.toString());
voice.lang = "en-US";
voice.rate = 0.85;
voice.pitch = 1;
speechSynthesis.speak(voice);
    let timer = setInterval(() => {

        number--;

        countdown.textContent = number;
         let voice = new SpeechSynthesisUtterance(number.toString());
voice.lang = "en-US";
voice.rate = 0.95;
voice.pitch = 1.2;
voice.volume = 1;
voice.pitch = 1;
speechSynthesis.speak(voice);
        countdown.style.animation = "none";
        countdown.offsetHeight;
        countdown.style.animation = "countdownPulse 1s ease-in-out";

        if (number === 0) {

            clearInterval(timer);

            setTimeout(() => {

                countdown.style.display = "none";

                document.getElementById("giftBox").classList.add("opened");

                function toggleBirthdayMusic() {
    let music = document.getElementById("birthdayMusic");
    let button = document.getElementById("musicButton");

    if (music.paused) {
        music.play().then(() => {
            button.textContent = "Pause Birthday Music ⏸️";
        }).catch(error => {
            alert("Audio error: " + error.message);
        });
    } else {
        music.pause();
        button.textContent = "Play Birthday Music 🎵";
    }
                }
                document.getElementById("surpriseMessage").style.display = "block";

                document.getElementById("birthdayCake").style.display = "block";

                document.querySelector(".letter-section").style.display = "block";

                document.getElementById("photoGallery").style.display = "block";

                document.querySelector(".gift-instruction").textContent =
                    "Your surprise is here, Odeta! ❤️";

            }, 700);
        }

    }, 1000);
}
function showLetter() {

    document.getElementById("birthdayLetter").style.display = "block";

}

function revealFinalMessage() {

    document.getElementById("finalMessage").style.display = "block";

}
function blowCandle() {

    document.querySelector(".flame").style.display = "none";

    document.getElementById("wishMessage").style.display = "block";

    document.querySelector(".wish-button").textContent =
        "Wish Made! ❤️";

}
function toggleBirthdayMusic() {
 let music = document.getElementById("birthdayMusic");
    let button = document.getElementById("musicButton");

    if (music.paused) {
        music.play();
        button.textContent = "Pause Birthday Music ⏸️";
    } else {
        music.pause();
        button.textContent = "Play Birthday Music 🎵";
    }
}
document.addEventListener("keydown", function(event) {

    if (event.key.toLowerCase() === "m") {

        let music = document.getElementById("birthdayVideo");

        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }

    }

});
function showLastSurprise() {
    document.getElementById("lastSurprise").style.display = "block";

    document.getElementById("lastSurprise").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    for (let i = 0; i < 15; i++) {
        let star = document.createElement("span");

        star.className = "golden-star";
        star.textContent = "✨";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = "70vh";

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1500);
    }
}
function revealWish() {
    createWishStars();
    let wish = document.getElementById("wishMessage");

    wish.style.display = "block";

    wish.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    document.getElementById("wishButton").textContent =
        "Your Wish Is Special ⭐";

    document.getElementById("wishButton").disabled = true;
}
function createWishStars() {

    for (let i = 0; i < 15; i++) {

        let star = document.createElement("span");

        star.className = "golden-star";
        star.textContent = "✨";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = "70vh";

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1500);
    }
}
function playWishSound() {

    let audio = new Audio(
        "https://cdn.pixabay.com/audio/2022/03/15/audio_783b4e7c8f.mp3"
    );

    audio.volume = 0.35;
    audio.play();

}
