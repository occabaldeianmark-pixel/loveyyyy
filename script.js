

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function showModal(content) {
    modalBody.innerHTML = content;
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

// FLOWER GALLERY
function openFlowers() {
    showModal(`
        <h2>Flowers for you, my love 🌷</h2>
        <p>
            Every flower reminds me of your beauty.
            These memories are some of my favorites. ❤️
        </p>

        <div class="gallery">
            <img src="pic1.jpg" alt="Our memory 1">
            <img src="pic2.jpg" alt="Our memory 2">
            <img src="pic3.jpg" alt="Our memory 3">
            <img src="pic4.jpg" alt="Our memory 4">
        </div>

        <p class="heart">I love you, Jomalyn! 💗</p>
    `);
}

// BIRTHDAY CAKE
function openCake() {
    showModal(`
        <h2>Happy Birthday, Baby! 🎂</h2>
        <div class="cake">🎂</div>

        <p>
            Today is your special day!
            I wish you happiness, good health,
            endless blessings and all the love
            your heart deserves.
        </p>

        <p><b>Make a wish, my love! ✨</b></p>

        <button class="primary" onclick="blowCandles()">
            Blow the candles 🕯️
        </button>

        <p id="cakeMessage"></p>
    `);
}

function blowCandles() {
    document.getElementById("cakeMessage").innerHTML =
    "🎉🎉 YAY! Your wish is on its way! I love you so much, Jomalyn! ❤️";
}

// LOVE LETTER
function openLetter() {
    showModal(`
        <h2>To My Dearest Jomalyn 💌</h2>

        <p>My love,</p>

        <p>
            Happy Birthday to the most special person
            in my life. ❤️
        </p>

        <p>
            I want you to know how grateful I am
            to have you. You make my days brighter
            and my life more beautiful.
        </p>

        <p>
            Even if life isn't always perfect,
            I promise to keep choosing you,
            supporting you, and loving you.
        </p>

        <p>
            May all your dreams come true.
            You deserve every beautiful thing
            this world has to offer.
        </p>

        <p>
            Happy Birthday, my baby!
            I love you always and forever. ❤️
        </p>

        <p class="heart">
            Forever yours. 💗
        </p>
    `);
}

// CLOSE WHEN CLICKING OUTSIDE
modal.addEventListener("click", function(event) {
    if(event.target === modal) {
        closeModal();
    }
});