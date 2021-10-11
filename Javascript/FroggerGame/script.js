document.addEventListener("DOMContentLoaded", () => {

    const squares = document.querySelectorAll(".grid div");
    const strButton = document.getElementById("start");
    const timeArea = document.getElementById("time-left");
    const resultArea = document.querySelector("#result");
    const carsLeft = document.querySelectorAll(".car-left");
    const carsRight = document.querySelectorAll(".car-right");
    const logsLeft = document.querySelectorAll(".log-left");
    const logsRight = document.querySelectorAll(".log-right");
    const width = 9;
    let currentIndex = 76;
    let timer = null;
    let currentTime = 20;
    squares[currentIndex].classList.add("frog");

    function moveFrog(e) {
        squares[currentIndex].classList.remove("frog");
        // eğer sol tuşuna basılmışsa ve en solda değilse
        if (e.keyCode == 37 && currentIndex % width > 0) {
            currentIndex--;
        }
        // eğer üst tuşuna basılmışsa ve en üstte değilse
        else if (e.keyCode == 38 && currentIndex - width >= 0) {
            currentIndex -= width;
        }
        // eğer sağ tuşuna basılmışsa ve en sağda değilse
        else if (e.keyCode == 39 && currentIndex % width < width - 1) {
            currentIndex++;
        }
        // eğer alt tuşuna basılmışsa ve en aşağıda değilse 
        else if (e.keyCode == 40 && currentIndex + width < width * width) {
            currentIndex += width;
        }
        squares[currentIndex].classList.add("frog");
        lose(); 
        win();
    } 

    //move the cars
    function autoMoveCars() {
        carsLeft.forEach(carLeft => moveCarLeft(carLeft));
        carsRight.forEach(carRight => moveCarRight(carRight));
    }

    function moveCarLeft(carLeft) {
        if (carLeft.classList.contains("c1")) {
            carLeft.classList.remove("c1");
            carLeft.classList.add("c2");
        }
        else if (carLeft.classList.contains("c2")) {
            carLeft.classList.remove("c2");
            carLeft.classList.add("c3");
        }
        else if (carLeft.classList.contains("c3")) {
            carLeft.classList.remove("c3");
            carLeft.classList.add("c1");
        }
    }

    function moveCarRight(carRight) {
        if (carRight.classList.contains("c1")) {
            carRight.classList.remove("c1");
            carRight.classList.add("c3");
        }
        else if (carRight.classList.contains("c2")) {
            carRight.classList.remove("c2");
            carRight.classList.add("c1");
        }
        else if (carRight.classList.contains("c3")) {
            carRight.classList.remove("c3");
            carRight.classList.add("c2");
        }
    }

    //move the logs
    function autoMoveLogs() {
        logsLeft.forEach(logLeft => moveLogLeft(logLeft));
        logsRight.forEach(logRight => moveLogRight(logRight));
    }

    //logs going left
    function moveLogLeft(logLeft) {
        if (logLeft.classList.contains("l1")) {
            logLeft.classList.remove("l1");
            logLeft.classList.add("l2");
        }
        else if (logLeft.classList.contains("l2")) {
            logLeft.classList.remove("l2");
            logLeft.classList.add("l3");
        }
        else if (logLeft.classList.contains("l3")) {
            logLeft.classList.remove("l3");
            logLeft.classList.add("l4");
        }
        else if (logLeft.classList.contains("l4")) {
            logLeft.classList.remove("l4");
            logLeft.classList.add("l5");
        }
        else if (logLeft.classList.contains("l5")) {
            logLeft.classList.remove("l5");
            logLeft.classList.add("l1");
        }
    }

    //logs going right
    function moveLogRight(logRight) {
        if (logRight.classList.contains("l1")) {
            logRight.classList.remove("l1");
            logRight.classList.add("l5");
        }
        else if (logRight.classList.contains("l2")) {
            logRight.classList.remove("l2");
            logRight.classList.add("l1");
        }
        else if (logRight.classList.contains("l3")) {
            logRight.classList.remove("l3");
            logRight.classList.add("l2");
        }
        else if (logRight.classList.contains("l4")) {
            logRight.classList.remove("l4");
            logRight.classList.add("l3");
        }
        else if (logRight.classList.contains("l5")) {
            logRight.classList.remove("l5");
            logRight.classList.add("l4");
        }
    }

    function moveRightWithLogLeft() {
        if (currentIndex >= 27 && currentIndex < 35) {
        squares[currentIndex].classList.remove("frog");
        currentIndex += 1;
        squares[currentIndex].classList.add("frog");
        }
    }

    function moveLeftWithLogRight() {
        if (currentIndex > 18 && currentIndex <= 26) {
        squares[currentIndex].classList.remove("frog");
        currentIndex -= 1;
        squares[currentIndex].classList.add("frog");
        }
    }

    //rules for win
    function win() {
        if (squares[4].classList.contains("frog")) {
        resultArea.innerHTML = "You Win";
        squares[currentIndex].classList.remove("frog")
        clearInterval(timer);
        document.removeEventListener("keyup", moveFrog);
        }
    }

    //rules for lose
    function lose() {
        if (
            (currentTime == 0 ) || 
            (squares[currentIndex].classList.contains("c1")) || 
            (squares[currentIndex].classList.contains("l4")) || 
            (squares[currentIndex].classList.contains("l5"))
        ) {
            resultArea.innerHTML = "Game Over";
            squares[currentIndex].classList.remove("frog");
            clearInterval(timer);
            document.removeEventListener("keyup", moveFrog);
        }
    }
        
    //all the functions that move pieces
    function movePieces() {
        currentTime--;
        timeArea.textContent = currentTime;
        autoMoveCars();
        autoMoveLogs();
        moveRightWithLogLeft();
        moveLeftWithLogRight();
        lose();
    }

    //to start, and pause the game
    strButton.addEventListener("click", () => {
        if (timer) {
            clearInterval(timer);
        } 
        else {
            timer = setInterval(movePieces, 1000);
            document.addEventListener("keyup", moveFrog);
        }
    })

})