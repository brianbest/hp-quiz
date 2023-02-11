import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import quizData from './quizData';

const quizDatqa = {
  "QuizTitle": "Which Harry Potter House Do You Belong In?",
  "Questions": [
  ]
};

function App() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // logic to handle when a user selects an answer
  function handleAnswerSelection(value) {
    setAnswers({...answers, [value]: answers[value] + 1 || 1});
    setCurrentQuestion(currentQuestion + 1);
    console.log(answers);
  }

  // logic to determine the user's house based on their answers
  function determineHouse() {
    // ...
  }

  return (
    <div className="App">
      <h1>{quizData.QuizTitle}</h1>

      {currentQuestion < quizData.Questions.length ? (
        <Question
          question={quizData.Questions[currentQuestion].Question}
          answers={quizData.Questions[currentQuestion].Answers}
          onAnswerSelection={handleAnswerSelection}
        />
      ) : (
        <Result house={determineHouse()} />
      )}
    </div>
  );
}

export default App;
