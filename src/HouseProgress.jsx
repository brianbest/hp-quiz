function HousesProgress({ answers, numberOfQuestions }) {
    const houses = Object.keys(answers) || [];

    return (
        <div className="house-progess">
            {houses.map((house, index) => (
                <House key={index} houseName={house} progress={answers[house]} numberOfQuestions={numberOfQuestions} />
            ))}
        </div>
    );
}

function House({ houseName, progress, numberOfQuestions }) {
    let roundedProgress = Math.round((progress / numberOfQuestions) * 100);
    if (isNaN(roundedProgress)) {
        roundedProgress = 0
    }

    return (
        <div className="house">
            <div className="house__name">{houseName}</div>
            <div className="house__progress">{roundedProgress}%</div>
        </div>
    );
}

export default HousesProgress;