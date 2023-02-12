import './leaderboard.css';

function Leaderboard({ users }) {
    const randomNumber = ()=>{ Math.floor(Math.random())};
    return (
        <div class="leaderboard">
            <h2>Here is what others got</h2>
            <ul>
            {users.map(user => (
                <li key={user.id +randomNumber()}>
                    <h4>{user.name}</h4>
                    <ul>
                        {user.houses.map((house, index) => (
                            <li key={index + house + randomNumber()}>#{index +1}:{house}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        </div>
        
    );
}

export default Leaderboard;