function Question({ question, answers, onAnswerSelection }) {
return (
    <div className="Question">
    <p>{question}</p>
    {answers.map((answer) => (
        <Answer
        key={answer.Option}
        option={answer.Option}
        value={answer.Value}
        onAnswerSelection={onAnswerSelection}
        />
    ))}
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