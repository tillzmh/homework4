
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