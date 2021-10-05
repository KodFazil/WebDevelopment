document.addEventListener("DOMContentLoaded", () => {

    const sqaures = document.querySelectorAll(".grid div");
    const resultArea = document.getElementById("result");
    let result = 0;
    let direction = 1;
    let currentShooterIndex = 202;
    let currentInvaderIndex = 0;
    let takedInvader = [];
    let width = 15;
    let invaderInterval = null;

    // invaders indexes
    const invaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39
    ];

    // draw invaders by giving them a class "invader"
    invaders.forEach(invader => sqaures[currentInvaderIndex + invader].classList.add("invader"));

    // draw shooter by giving a class name "shooter"
    sqaures[currentShooterIndex].classList.add("shooter");

    // move shooter
    function moveShooter(e) {
        sqaures[currentShooterIndex].classList.remove("shooter");
        // eger sol ok tuşuna basılmışsa ve en solda değilse
        if (e.keyCode == 37 && currentShooterIndex % width != 0) {
            currentShooterIndex--;
        }
        // eger sağ ok tuşuna basılmışsa ve en sağda değilse
        else if (e.keyCode == 39 && currentShooterIndex % width < width - 1) {
            currentShooterIndex++;
        }
        sqaures[currentShooterIndex].classList.add("shooter");
    }
    document.addEventListener("keydown", moveShooter);

    // move invaders 
    function moveInvaders() {
        // ilk eleman en solda ise
        const leftEdge = invaders[0] % width == 0;
        // son eleman en sağda ise
        const rightEdge = invaders[invaders.length - 1] % width == width - 1;

        // eger sağ ya da sol tarafa geldilerse aşağı inmeleri
        if ((leftEdge && direction == -1) || (rightEdge && direction == 1)) {
            direction = width;
        }
        else if (direction == width) {
            if (leftEdge) direction = 1;
            else direction = -1;
        }
        // inavaderların eski yerlerini temizle 
        invaders.forEach(oIndexInvader => sqaures[oIndexInvader].classList.remove("invader"));
        
        // invaderlara yeni yerlerini ver
        /* invaders.forEach(oIndexInvader => oIndexInvader += direction); 
            üst satırdaki kod neden çalışmadı 
            Cevap: foreach de value bu şekilde direk değişmiyormuş 
        */
        for (let i = 0; i < invaders.length; i++) {
            invaders[i] += direction;
        }
        //invaders.forEach(oIndexInvader => console.log(oIndexInvader + " " + direction));
        
        // invaderların yeni yerlerini oluştur
        invaders.forEach((oIndexInvader, index) => {
            if (!takedInvader.includes(index)) {
                sqaures[oIndexInvader].classList.add("invader")
            }  
        });

        // game over durumları
        // kaybetme
        if (sqaures[currentShooterIndex].classList.contains("invader", "shooter")) {
            resultArea.textContent = "Game Over";
            sqaures[currentShooterIndex].classList.add("boom");
            clearInterval(invaderInterval); 
        }
        invaders.forEach(element => {
            if (element > sqaures.length - width - 1) {
                resultArea.textContent = "Game Over";
                clearInterval(invaderInterval);
            }
        });
        // kazanma
        if (takedInvader.length == invaders.length) {
            resultArea.textContent = "Win!";
            clearInterval(invaderInterval);
        }
    } 
    invaderInterval = setInterval(moveInvaders, 150);

    function shoot(e) {
        let laserInterval = null;
        let currentLaserIndex = currentShooterIndex;
        function moveLaser() {
            // lazerin o anki konumunu sil yeni indexi verip ona göre konumla
            sqaures[currentLaserIndex].classList.remove("laser");
            currentLaserIndex -= width;
            sqaures[currentLaserIndex].classList.add("laser");
            // yeni adresteki class kontrolünü ve onunu sonuçlarını yap
            if (sqaures[currentLaserIndex].classList.contains("invader")) {
                sqaures[currentLaserIndex].classList.remove("invader");
                sqaures[currentLaserIndex].classList.remove("laser");
                sqaures[currentLaserIndex].classList.add("boom");
                // vurulan yerde kısaca patlamayı göster ve durdur
                setTimeout(() => sqaures[currentLaserIndex].classList.remove("boom"), 250);
                clearInterval(laserInterval);
                // vurulan invaderın dizideki indexini vurulmuşlar dizisine al 
                takedInvader.push(invaders.indexOf(currentLaserIndex));
                // scoreu değiştir ve alana yaz
                result++;
                resultArea.textContent = result;
            }
            if (currentLaserIndex < width) {
                clearInterval(laserInterval);
                setTimeout(() => {
                    sqaures[currentLaserIndex].classList.remove("laser");
                }, 150);
            }
        }
        // document.addEventListener("keyup", e => {
        //     if (e.keyCode == 32) { // space key
        //         laserInterval = setInterval(moveLaser, 100);
        //     }
        // })
        switch (e.keyCode) {
            case 32:
                laserInterval = setInterval(moveLaser, 100);
                break;
        }
    }
    document.addEventListener("keyup", shoot);

})