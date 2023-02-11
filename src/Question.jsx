function Question({ question, answers, onAnswerSelection }) {
    const ransomizedAnswers = answers.sort(() => Math.random() - 0.5);
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