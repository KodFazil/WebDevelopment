document.addEventListener("DOMContentLoaded", () => {

    const squares = document.querySelectorAll(".grid div");
    const scoreBoard = document.getElementById("scoreBoard");
    const gameButton = document.querySelector(".start");

    let currentSnake = [2, 1, 0]; // 2 for head 1 for body 0 for tail 
    //let xdirection = 1;
    //let ydirection = 10;
    const width = 10;
    let direction = 1;
    let interval = 0;
    let intervalTime = 0;
    let speed = 0.9;
    let currentIndex = 0;
    let foodIndex = 0;
    let score = 0;
    
    function startGame() {
        // yılanı temizle
        currentSnake.forEach(index => squares[index].classList.remove("snake"));
        // yemeği temizle
        squares[foodIndex].classList.remove("food");
        // her şeyi ilk hale getir
        clearInterval(interval);
        score = 0;
        scoreBoard.textContent = score;
        randomFoodPosition();
        direction = 1;
        intervalTime = 1000;
        currentIndex = 0;
        currentSnake = [2, 1, 0];
        currentSnake.forEach(index => squares[index].classList.add("snake"));
        interval = setInterval(movement, intervalTime);
    }
    gameButton.addEventListener("click", startGame);

    function movement() {
        // yılanın hareketi sonucunda olacaklar:
        // currentSnake[0] => yılanın head i
        // 1- Eğer yılan bir yere carparsa ve oyunun bitme durumu oluşursa
        if (
            // ilk satırda ve yukarı çıkmak istiyorsa
            (currentSnake[0] - width < 0 && direction == -width) ||
            // son sütunda ve sağa gitmek istiyorsa
            (currentSnake[0] % 10 == 9 && direction == 1) ||
            // ilk sütunda ve sola gitmek istiyorsa
            (currentSnake[0] % 10 == 0 && direction == -1) ||
            // son satırda ve aşağıya gitmek istiyorsa
            (currentSnake[0] + width >= width*width && direction == width)   ||
            // yılan kendi üstüne gelirse
            (squares[currentSnake[0] + direction].classList.contains("snake"))
        ) {
            return clearInterval(interval);
        }

        // 2- Eğer yılan yemekte almadı ve yanmadıysa sadece ilerleme
        // son elemanı çıkar baş elemanı diziye ekle class ekleme alttaki divle ortak die ondan sonra
        const tail = currentSnake.pop();
        squares[tail].classList.remove("snake");
        currentSnake.unshift(currentSnake[0] + direction);
        
        // 3- Eğer yılan yemeği yediyse, 2. durum aynı zamanda 3 için de geçerli
        if (squares[currentSnake[0]].classList.contains("food")) {
            squares[currentSnake[0]].classList.remove("food");
            squares[tail].classList.add("snake");
            currentSnake.push(tail);
            randomFoodPosition();
            score++;
            scoreBoard.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(movement, intervalTime);
        }
        // hem 2 hem 3 için
        squares[currentSnake[0]].classList.add("snake");
    }

    function moveSnake(e) {
        squares[currentIndex].classList.remove("snake");
        // keycodes 37 left arrow, 38 up arrow, 39 right arrow, 40 down arrow.  
        // width = 10
        if (e.keyCode == 37) {
            direction = -1;
        }
        else if (e.keyCode == 38) {
            direction = -width; 
        }
        else if (e.keyCode == 39) {
            direction = 1;
        } 
        else if (e.keyCode == 40) {
            direction = width;
        }
        //console.log(e.keyCode);
    }
    document.addEventListener("keyup", moveSnake);

    function randomFoodPosition() {
        // yılanın olmadığı bir yere bulana kadar dön
        do { 
            foodIndex = Math.floor(Math.random() * squares.length);
        } while (squares[foodIndex].classList.contains("snake"));
        // yer bulunca oraya yemeği ekle
        squares[foodIndex].classList.add("food");
    }

})