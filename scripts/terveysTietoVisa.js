// Haetaan viittaukset DOM-elementteihin, joita tarvitaan koodissa
const quiz = document.getElementById('quiz');
const results = document.getElementById('results');

// Määritellään oikeat vastaukset kysymyksiin
const correctAnswers = [
    1, // Ekan kysymyksen oikea vastaus
    1, // Toisen 
    0, // Kolmannen
    0, // Neljännen
    0  // Viidennen
];

// Määritellään selitykset kysymyksiin
const explanations = [
    'Ala-asteikäisten lasten yöunisuositus on 9-11 tuntia, jotta he voivat levätä ja kasvaa kunnolla.',
    'Käsien peseminen ennen ruokailua poistaa bakteerit ja estää sairauksien leviämisen, mikä on tärkeää terveyden ylläpitämiseksi.',
    'Ala-asteikäisillä lapsilla on yleensä 20 maitohammasta. Pysyvät hampaat alkavat puhjeta yleensä 6-vuotiaana ja korvaavat vähitellen maitohampaat.',
    'Veden juomisen tärkein syy on nesteytys ja kehon toimintojen ylläpito. Vesi on välttämätöntä monille elimistön prosesseille, kuten verenkierron ja aineenvaihdunnan ylläpitämiselle.',
    'Suurin luu ihmiskehossa on reisiluu. Se on vahva ja paksu luu, joka kestää suuria kuormituksia ja kantaa suurimman osan ihmisen painosta kävellessä ja juostessa.'
];

// Tämä funktio suoritetaan, kun käyttäjä klikkaa "Lähetä vastaukset" painiketta
function submitQuiz() {
    // Haetaan käyttäjän vastaukset
    const userAnswers = correctAnswers.map((_, index) => {
        // Haetaan kaikki radiopainikkeet, jotka kuuluvat tähän kysymykseen
        const radioButtons = quiz.elements[`question-${index}`];
        let answer = null;
        // Käydään läpi kaikki radiopainikkeet ja otetaan valittu vastaus
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                answer = parseInt(radioButton.value);
                break;
            }
        }
        return answer;
    });

    // Luodaan selitykset HTML-muodossa käyttäjän vastausten perusteella
    const explanationHtml = correctAnswers.map((correctAnswer, index) => {
        // Tarkistetaan, onko käyttäjän vastaus oikein
        const isCorrect = userAnswers[index] === correctAnswer;
        // Haetaan kysymyksen teksti DOM:ista
        const questionElement = quiz.getElementsByClassName('question')[index];
        const questionText = questionElement.getElementsByTagName('h2')[0].innerText;
        // Palautetaan selitys ja sen tila (oikein/väärin) HTML-muodossa
        return `
            <div>
                <h3>${questionText}</h3>
                <p class="${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? 'Oikein!' : 'Väärin'}<br>
                Selitys: ${explanations[index]}</p>
            </div>
        `;
    }).join('');
    

    // Asetetaan selitykset HTML-muodossa "results"-elementtiin
    results.innerHTML = explanationHtml;
    showResults();
}


function showResults() {
    results.classList.add("fadeIn");
    results.style.display = "block";
}