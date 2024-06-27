const danceMoves = ["spin", "jump", "slide", "wave", "twist"];
const householdObjects = ["chair", "broom", "pillow", "bucket", "mop"];

document.getElementById("generateBtn").addEventListener("click", generateDanceMove);

function generateDanceMove() {
    const move = danceMoves[Math.floor(Math.random() * danceMoves.length)];
    const prop = householdObjects[Math.floor(Math.random() * householdObjects.length)];
    document.getElementById("danceMove").textContent = `${move} with a ${prop}`;
}
