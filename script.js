"use strict"

document.addEventListener("DOMContentLoaded", function () {


    const kartice = [


        { name: "v1", img: "img/v1.png" },
        { name: "v2", img: "img/v2.jpg" },
        { name: "v3", img: "img/v3jpg.jpg" },
        { name: "v1", img: "img/v1.png" },
        { name: "v2", img: "img/v2.jpg" },
        { name: "v3", img: "img/v3jpg.jpg" }

    ];


    kartice.sort(() => 0.5 - Math.random());

    const memoryGame = document.querySelector(".memoryGame");
    let kliknuteKartice = [];
    let kliknuteKarticeID = [];
    let dobreKombinacije = [];
    let greske = [];

    for (let i = 0; i < kartice.length; i++) {

        const card = document.createElement("img");
        card.setAttribute("src", "img/white.jpg");
        card.setAttribute("data-id", i);
        card.classList.add("card")
        memoryGame.appendChild(card);


        card.addEventListener("click", function () {

            card.classList.add("obrnutaKartica");
            const cardID = this.getAttribute("data-id")
            this.setAttribute("src", kartice[cardID].img)
            kliknuteKarticeID.push(cardID)
            kliknuteKartice.push(kartice[cardID].name);


            console.log(kliknuteKartice);

            if (kliknuteKartice.length === 2) {

                setTimeout(provjera, 500);

            }
        })

        function provjera() {


            const cards = document.querySelectorAll("img");
            const opcija1 = kliknuteKarticeID[0];
            const opcija2 = kliknuteKarticeID[1];

            if (kliknuteKartice[0] === kliknuteKartice[1]) {



                alert("bravo!")
                dobreKombinacije.push(opcija1)
                dobreKombinacije.push(opcija2)
                kliknuteKartice = []
                provjeriPobjednika()
                return;

            }


            else {

                cards[opcija1].setAttribute("src", "img/white.jpg")
                cards[opcija2].setAttribute("src", "img/white.jpg")
                greske += 1
                provjeriGubitnika()
                alert("Please try again!");


            }

            kliknuteKartice = [];
            kliknuteKarticeID = [];
        }

        function provjeriPobjednika() {


            if (dobreKombinacije.length === 6) {



                alert("Congratulations! You're a winner! :)")
                return;

            }

        }

        function provjeriGubitnika() {


            if (greske.length === 3) {


                alert("You lost :)")
                kliknuteKartice = [];
                kliknuteKarticeID = [];
                dobreKombinacije = [];
                greske = [];

            }


        }

    };

})