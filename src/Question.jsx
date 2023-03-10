import React, {useState, useEffect} from 'react';
function Question({ question, answers, onAnswerSelection }) {
    const [ransomizedAnswers, setRansomizedAnswers] = useState([]);

    useEffect(() => {
        setRansomizedAnswers(answers.sort(() => Math.random() - 0.5));
    }, [answers]);

    return (
        <div className="question">
            <p>{question}</p>
            <div className="answers">
                {ransomizedAnswers.map((answer) => (
                    <Answer
                        key={answer.Option}
                        option={answer.Option}
                        value={answer.Value}
                        onAnswerSelection={onAnswerSelection}
                    />
                ))}
            </div>

        </div>
    );
}

function Answer({ option, value, onAnswerSelection }) {
    return (
        <div className="Answer">
            <button onClick={() => onAnswerSelection(value)}>{option}</button>
        </div>
    );
}

export default Question;