
  const timePerQuestion = 10; 
  const wrongAnswerPenalty = 5; 
  const rightAnswerReward = 10; 
  const storageName = "quiz";
  const maxNumberOfHighScores = 10;

  let score = 0;
  let currentQuestionIndex = 0;
  let timeRemaining;
  let timer;
  let initials = "";

  const questions = [
    {
        q: "Who is Nipsey Hussle?",
        a: [
            "All the Above", "Rapper", "Street Legend", "Hustler"
        ]
    },
    {
        q: "Where is Nipsey From?",
        a: [
            "Censhaw District", "Watts", "Compton", "Long Beach"
        ]
    },
    {
        q:"What gang set is Nipsey?",
        a: ["Rollin 60s", "Crenshaw Mafia", "Piru Bloods", "730 Shine"]
    },
    {
        q: "What was his first mixtape series called?",
        a: [
            "Bullets aint got no name", "The Marathron", "Slauson Boy", "None of the Above"
        ]
    },
    {
        q: "What was the first record lable that signed Nipsey?",
        a: [
            "Epic Records", "Sony Records", "Atlantic Records", "Death Row Records"
        ]
    },
    {
        q: "What was Nipsey first debute album?",
        a: ["Victory Lap", "Mailbox Money", "Crenshaw", "No Pressure"
    ]
    },
    {
        q: "What was Nipsey famous motto?",
        a:["All the Above", "All money in, no money out", "The Marathron Contiunes",]
    },
    {
        q:"Who did Nipsey have a clothing deal with?",
        a: ["Puma", "Nike", "Rebook", "Adidias"]
    },
    {
        q: "Is Hussle Man A Shooter?",
        a: ["True", "False"]
    },
    {
        q: "When was Nispey Murdered?",
        a: [
            "March 31, 2019", "Aug 15, 2019", "Febuary 16, 2018", "October 22, 2013" 
        ]
    },
    {
        q: "What is Nipsey birthname?",
        a: ["Ermias", "Nipsey", "Thundercat", "Samual"]
    }
 ]

document.addEventListener("DOMContentLoaded", init);

    function init(){
    document.querySelector("footer input").addEventListener("keyup", initialsEntered);
    document.querySelector("footer button").addEventListener("click", startGame);
showHighScores();
}

  function startGame(){
    score = 0;
    currentQuestionIndex = 0;
    startTimer()
    document.body.classList.add("quiz");
    loadQuestions()
  }

  function loadQuestions(){
    let currentQuestion = questions[currentQuestionIndex];
    let possibleAnswers = shuffle(currentQuestion.a);
    let html = `<h2>${currentQuestion.q}</h2>`;
    for(let possibleAnswer of possibleAnswer){
        html += `<button>${possibleAnswer}</button>`;
    }
  

  document.querySelector("main").innerHTML = html;

  let buttons = document.querySelectorAll("main button");
  for(let buttons of buttons){
    buttons.addEventListner("click", handleUserClick);
  }
}

 function handleUserClick(e){
    let userSelection = e.target.textContent;
    let correctAnswer = questions[currentQuestionIndex].a[0];
    if(userSelection === correctAnswer){
        score += rightAnswerReward
    }
    else{
        timeRemaining = Math.max(0, timeRemaining - wrongAnswerPenalty);
    }
    currentQuestionIndex++;
    if(currentQuestion >= questions.length){
        endTimer()
        endGame()
    }
    else{
        loadQuestions();
    }
}
  function endGame(){
    score += timeRemaining;
    document.querySelector("footer h3").textContent = `Your score is ${score}`;
    let highScores = getHighScores();
    highScores.push({score, initials});
    setHighScore(highScores);
    showHighScores();
    document.body.classList.remove("quiz");
  }

  function getHighScores(){
    let highScores = localStorage.getItem(storageName);
    if (!highScores) return [];
    return JSON.parse(highScores);
    }

  function startTimer(){
    timeRemaining = timePerQuestion * questions.length;
    tick();
    timer = setInterval(tick, 1000);
  }
  function endTimer(){
    clearInterval(timer)
  }

  function tick(){
    document.querySelector("header time").textContent = timeRemaining;
        if(timeRemaining <= 0){
            endTimer();
            endGame();
        }
        else timeRemaining--;
        
  }

  function initialsEntered(e){
    initials = e.target.value.trim();
    if (initials.length){
document.querySelector("footer button").removeAttribute("disabled");
}
    else {
document.querySelector("footer button").setAttribute("disabled", true);
    }
}

