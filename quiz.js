
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