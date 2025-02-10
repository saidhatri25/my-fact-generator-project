// script.js
document.getElementById('generateFactBtn').addEventListener('click', generateFunFact);

function generateFunFact() {
    const facts = [
        "You love exploring parks and enjoying the tranquility they offer.",
        "Snowy landscapes captivate you with their serene beauty.",
        "Mountains are your go-to for breathtaking views and adventure.",
        "Beaches are your favorite spot for relaxation and fun in the sun."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    document.getElementById('funFact').textContent = randomFact;
}
