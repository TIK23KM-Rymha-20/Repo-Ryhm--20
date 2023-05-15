//Esitellään pistelaskussa tarvittavat muuttujat
let answers = 0;
let points = 0;

//Funktio joka tarkistaa onko vastaus oikein
function checkAnswer(element) {

    //Haetaan kysymyksen radiobuttonit
    const radioButtons = element.parentElement.parentElement.getElementsByTagName("input");
    //Käydään buttonit yksitellen läpi
    for (const radioButton of radioButtons) {
        //Disabloidaan button
        radioButton.disabled = true;
    }

    //Tuodaan vastausvaihtoehdon selite esille
    element.nextSibling.nextSibling.style.display = "block";
    //Jos vastaus on oikein
    if (element.nextSibling.nextSibling.classList.contains("text-bg-success")) {
        //Lisätään piste
        points++;
    }
    //Määritetään opacityksi valitulle vastausvaihtoehdolle 1.0 oletuksen ollessa 0.6.
    //Annettu vastaus erottuu kirkkaampana.
    element.nextSibling.nextSibling.style.opacity = "1.0";
    //Kasvatetaan annettujen vastausten määrää yhdellä
    answers++;
    if(answers === 5) {
        document.getElementById('submitbutton').disabled = false;
        document.getElementById('submitbutton').innerHTML = "Näytäppä vastaukset!";
    }
}

//Funktio joka näyttää pistemäärän ja loput selitteet
function showAnswers() {
    //Tarkistetaan onko kaikkiin kysymyksiin vastattu
    if(answers === 5) {
        //Haetaan kaikkien vastausvaihtoehtojen selitekentät
        const definitions = document.querySelectorAll('[id="historyAnswers"]');
        //Käydään ne läpi ja tuodaan esille
        for(let i = 0; i < definitions.length; i++) {
            definitions[i].style.display = "block";
        }
    //Kerrotaan saatu pistemäärä
    document.getElementById("historyResult").innerHTML = "Sait tuloksen:  " + points + " / " + answers;

    }
}
