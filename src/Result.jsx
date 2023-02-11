function Result({ houseRank }) {
    return (
        <div className="Result">
            <p>You belong in the {houseRank[0]}!</p>
            <p>You could have easily been in {houseRank[1]}!</p>
            <p>You probably have some friends in {houseRank[2]}!</p>
            <p>You are least like {houseRank[3]}!</p>
        </div>
    );
}

export default Result;