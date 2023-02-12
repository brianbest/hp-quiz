import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import HousesProgress from './HouseProgress';
import quizData from './quizdata';
import HousesCollection from './firebase';
import NameForm from './NameForm';
import Leaderboard from './Leaderboard';

const housesCollection = new HousesCollection();


function App() {
  function randomizeQuestions(questions) {
    return questions.sort(() => Math.random() - 0.5);
  }
  const [answers, setAnswers] = useState({
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(quizData.Questions);
  const [name, setName] = useState('');
  const [userLeaderboard, setUserLeaderboard] = useState([]);
  
  useEffect(() => {
    housesCollection.getUserHouses().then((houses) => {
      setUserLeaderboard(houses);
    });
  }, [userLeaderboard]);

  useEffect(() => {
    setQuestions(quizData.Questions);
  }, []);

  const endNumberOfQuestions = questions.length;

  // logic to handle when a user selects an answer
  function handleAnswerSelection(value) {
    setAnswers({ ...answers, [value]: answers[value] + 1 || 1 });
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === endNumberOfQuestions - 1) {
      housesCollection.addHouse(name, determineHouseRank());
    }
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
      {name === '' ? (
        <div>
          <NameForm onSubmit={setName} />
        </div>
      ) : (
        <div>
          {currentQuestion < endNumberOfQuestions ? (
            <div>
              {name == "elva" || name == "Elva" ? (
                <h4 align="center">I LOVE YOU BOO BERRY!! Lets get you sorted!!</h4>
              ):(
                <h4 align="center">Lets sort you out {name}!</h4>
              )}
             
              <HousesProgress answers={answers} numberOfQuestions={currentQuestion} />
              <Question
                question={questions[currentQuestion].Question}
                answers={questions[currentQuestion].Answers}
                onAnswerSelection={handleAnswerSelection}
              />
            </div>
          ) : (
            <div>
              <HousesProgress answers={answers} numberOfQuestions={currentQuestion} />
              <Result houseRank={determineHouseRank()} />
              {userLeaderboard.length > 0 ? (
                <Leaderboard users={userLeaderboard}/>
              ):(
                <div></div>
              )}
            </div>
          )}
         
        </div>

      )}
      
     
    </div>
  );
}

export default App;
