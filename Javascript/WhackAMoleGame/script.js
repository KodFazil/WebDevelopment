const squares = document.querySelectorAll(".square");
const moles = document.querySelectorAll(".mole");
var score = document.getElementById("score");
var time = document.getElementById("time-left");
var result = 0;
var currentTime = 10;
var hitPositionId;

function randomSquare() {
    // başlangıçta hepsinden mole classını kaldırıyoruz
    squares.forEach(squareI => {
        squareI.classList.remove("mole");
    });
    // daha sonra rand ile seçilmiş olan kareye köstebeği ekliyoruz.
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPositionId = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener("mouseup", () => {
        if (square.id == hitPositionId) {
            result++;
            score.textContent = result;
        }
    })
});

function moveMole() {
    let timer = null;
    timer = setInterval(randomSquare, 1000);
}
moveMole();
//let timer = setInterval(randomSquare, 1000);

function countdown() {
    currentTime--;
    time.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(timer);
        alert("Game Over! Your score is: " + result);
    }
}

let timer = setInterval(countdown, 1000);

