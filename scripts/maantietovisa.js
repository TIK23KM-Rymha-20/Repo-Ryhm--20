let myQuestions = [
    {
      question: "Mikä on Ranskan pääkaupunki",
      answers: {
        a: 'Pariisi',
        b: 'Dijon',
        c: 'Caen'
      },
      correctAnswer: 'a'
    },
    {
      question: "Montako maanosaa maailmassa on?",
      answers: {
        a: '6',
        b: '7',
        c: '8'
      },
      correctAnswer: 'b'
    },
    {
      question: "Mitä kieltä puhutaan Brasiliassa?",
      answers: {
        a: 'Ranskaa',
        b: 'Portugalia',
        c: 'Espanjaa'
      },
      correctAnswer: 'b'
    },
    {question: "Mikä rahayksikkö on Japanissa käytössä?",
    answers: {
      a: 'Yen',
      b: 'Euro',
      c: 'Dollari'
    },
    correctAnswer: 'a'
  },
  {
    question: "Missä Suomen maakunnassa sijaitsee Vaasan kaupunki?",
      answers: {
        a: 'Keski-Pohjanmaa',
        b: 'Etelä-Pohjanmaa',
        c: 'Pohjanmaa'
      },
      correctAnswer: 'c'
    },
  ];
  
  let quizContainer = document.getElementById('quiz');
  let resultsContainer = document.getElementById('results');
  let submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      let output = [];
      let answers;
  
      for(let i=0; i<questions.length; i++){
        
        answers = [];
  
        for(letter in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
    
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      let answerContainers = quizContainer.querySelectorAll('.answers');
      
      let userAnswer = '';
      let numCorrect = 0;
      
      for(let i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          
          answerContainers[i].style.color = 'lightgreen';
        }
        else{
          answerContainers[i].style.color = 'red';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' / ' + questions.length;
    }
  
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }