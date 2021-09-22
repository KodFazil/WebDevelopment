document.addEventListener("DOMContentLoaded", () => {

    const cardArray = [
        {
            name: "cheeseburger",
            image: "images/cheeseburger.png"  
        },
        {
            name: "cheeseburger",
            image: "images/cheeseburger.png"  
        },
        {
            name: "fries",
            image: "images/fries.png"
        },
        {
            name: "fries",
            image: "images/fries.png"
        },
        {
            name: "hotdog",
            image: "images/hotdog.png"
        },
        {
            name: "hotdog",
            image: "images/hotdog.png"
        },
        {
            name: "icecream",
            image: "images/ice-cream.png"
        },
        {
            name: "icecream",
            image: "images/ice-cream.png"
        },
        {
            name: "milkshake",
            image: "images/milkshake.png"
        },
        {
            name: "milkshake",
            image: "images/milkshake.png"
        },
        {
            name: "pizza",
            image: "images/pizza.png"
        },
        {
            name: "pizza",
            image: "images/pizza.png"
        }
    ]

    // Buradaki sort işlemi dizide a ile b yi kıyas yapıyor ve çıkan sonucun negatif 
    // pozitifliğine göre sıralama yapıyor, sonuç negatifse küçük olan önde olacak gibi.
    // Böylece küçükten büyüğe ya da tersi şeklinde sıralama olacak ancak Math.random() da
    // rastgele geldiği için - 0.5 olunca pozitif negatiflik değişiyor o yüzden dizi rastgele
    // sıralanmış oluyor. 
    cardArray.sort(() => Math.random() - 0.5);

    const grid = document.querySelector(".grid");
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            // bir image elementi oluştur
            var card = document.createElement("img");
            // oluşan image elemanına attributelarını ver
            card.setAttribute("src", "images/blank.png");
            card.setAttribute("data-id", i);
            // carda tıklanınca olacak fonksiyon
            card.addEventListener("click", flipCard);
            // htmlde grip divinin altına bu elemanları ekle
            grid.appendChild(card);  
        }
    }

    createBoard();

    var chosenCards = [];
    var chosenCardsId = [];
    var cardsWon = [];
    const score = document.getElementById("score");

    function flipCard() {
        var cardId = this.getAttribute("data-id");
        chosenCards.push(cardArray[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute("src", cardArray[cardId].image);
        if (chosenCards.length == 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        var firstID = chosenCardsId[0];
        var secondId = chosenCardsId[1];
        var cards = document.querySelectorAll("img");
        if (chosenCards[0] === chosenCards[1]) {
            // resimleri açılmış eşleşen kartlar bulundukları için artık kapatma
            cards[firstID].setAttribute("src", "images/white.png");
            cards[secondId].setAttribute("src", "images/white.png");
            cardsWon.push(chosenCards);
            alert("MATCH!");
        }
        else {
            // kartlar açıldı ancak uyuşmadı o zaman eski haline getirme
            cards[firstID].setAttribute("src", "images/blank.png");
            cards[secondId].setAttribute("src", "images/blank.png");
            //alert("Try Again!");
        }
        // yeni eşleşmeler için seçili kartlar dizisini boş hale getirme
        chosenCards = [];
        chosenCardsId = [];
        score.textContent = cardsWon.length;
    }

})