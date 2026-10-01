// =========================
// LOADING SCREEN
// =========================

const progress = document.getElementById("progress");
const loadingBar = document.getElementById("loading-bar");
const statusText = document.getElementById("status");

const loader = document.getElementById("loader");
const intro = document.getElementById("intro");

let value = 0;

const message = [
    "Preparing something special...",
    "Collecting memories...",
    "Adding a little magic...",
    "Almost there...",
    "Access granted ♡"
];

const loading = setInterval(() => {

    value++;

    progress.textContent = value;
    loadingBar.style.width = value + "%";

    if (value % 20 === 0) {

        const index = Math.min(
            Math.floor(value / 20),
            message.length - 1
        );

        statusText.textContent = message[index];
    }

    if (value >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            loader.classList.add("hide");
            intro.classList.add("show");

        }, 700);
    }

}, 35);


// =========================
// ENTER STORY
// =========================

const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        document.getElementById("story").scrollIntoView({
            behavior: "smooth"
        });

    });

}


// =========================
// PHOTO MODAL
// =========================

const photoCards = document.querySelectorAll(".photo-card");

const photoModal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const closeModal = document.getElementById("close-modal");


photoCards.forEach(card => {

    card.addEventListener("click", () => {

        const image = card.querySelector("img");
        const caption = card.dataset.caption;

        modalImage.src = image.src;
        modalCaption.textContent = caption;

        photoModal.classList.add("active");

    });

});


if (closeModal) {

    closeModal.addEventListener("click", () => {

        photoModal.classList.remove("active");

    });

}


if (photoModal) {

    photoModal.addEventListener("click", (event) => {

        if (event.target === photoModal) {

            photoModal.classList.remove("active");

        }

    });

}


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && photoModal) {

        photoModal.classList.remove("active");

    }

})

// =========================
// SECRET CARD UNLOCK
// =========================

const secretCards =
    document.querySelectorAll(".secret-card");

const unlockCount =
    document.getElementById("unlock-count");

const classified =
    document.getElementById("classified");

const openFileBtn =
    document.getElementById("openFileBtn");

const fileStatus =
    document.getElementById("fileStatus");

const secretFile =
    document.getElementById("secretFile");


let unlocked = 0;


secretCards.forEach(card => {

    const button =
        card.querySelector(".unlock-btn");


    button.addEventListener("click", () => {

        // Already unlocked
        if (card.classList.contains("unlocked")) {
            return;
        }


        // Unlock card
        card.classList.add("unlocked");


        // Increase counter
        unlocked++;


        // Update counter
        unlockCount.textContent =
            `${unlocked} / ${secretCards.length} UNLOCKED`;


        // Small vibration
        if (navigator.vibrate) {
            navigator.vibrate(40);
        }


        // =========================
        // ALL 4 UNLOCKED
        // =========================

        if (unlocked === secretCards.length) {

            setTimeout(() => {

                // Glitch effect
                classified.classList.add("glitch");


                setTimeout(() => {

                    classified.classList.remove("glitch");

                    classified.classList.add(
                        "access-granted"
                    );


                    // Unlock file
                    openFileBtn.disabled = false;

                    fileStatus.textContent =
                        "ACCESS GRANTED";


                    // Scroll to classified
                    classified.scrollIntoView({
                        behavior: "smooth"
                    });


                }, 800);


            }, 700);

        }

    });

});


// =========================
// OPEN CLASSIFIED FILE
// =========================

openFileBtn.addEventListener("click", () => {

    secretFile.classList.add("open");

});


secretCards.forEach(card => {

    const button = card.querySelector(".unlock-btn");

    button.addEventListener("click", () => {

        if (card.classList.contains("unlocked")) {
            return;
        }

        // Unlock card
        card.classList.add("unlocked");

        // Increase count
        unlocked++;

        // Update counter
        unlockCount.textContent =
            `${unlocked} / ${secretCards.length} UNLOCKED`;

        // Phone vibration
        if (navigator.vibrate) {
            navigator.vibrate(40);
        }

    });

});