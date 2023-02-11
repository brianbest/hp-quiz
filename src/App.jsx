import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import HousesProgress from './HouseProgress';
import quizData from './quizData';

function App() {
  const [answers, setAnswers] = useState({
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // logic to handle when a user selects an answer
  function handleAnswerSelection(value) {
    setAnswers({ ...answers, [value]: answers[value] + 1 || 1 });
    setCurrentQuestion(currentQuestion + 1);
  }

  // logic to determine the user's house based on their answers
  function determineHouseRank() {
    const houses = Object.keys(answers);
    const houseRank = houses.sort((a, b) => answers[b] - answers[a]);
    return houseRank;
  }

  return (
    <div className="App">
      <h1>{quizData.QuizTitle}</h1>

      {currentQuestion < quizData.Questions.length ? (
        <div>
          <HousesProgress answers={answers} numberOfQuestions={currentQuestion} />
          <Question
            question={quizData.Questions[currentQuestion].Question}
            answers={quizData.Questions[currentQuestion].Answers}
            onAnswerSelection={handleAnswerSelection}
          />
        </div>
      ) : (
        <Result houseRank={determineHouseRank()} />
      )}
    </div>
  );
}

export default App;
