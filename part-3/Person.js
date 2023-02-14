const Person = (props) => {
    let goVote;
    goVote = props.age > 18 ? "please go vote" : "you must be 18";

    let name;
    name = props.name.length > 8 ? props.name.slice(0, 6) : props.name;

    let hobbies;
    hobbies = props.hobbies.map(h => <li>{h}</li>);

    return (
        < div >
            <p>Learn some information about this person</p>
            <ul>
                <li>{name}</li>
                <li>{props.age}</li>
                <li>Hobbies:</li>
                <ul>
                    {hobbies}
                </ul>
            </ul>

            <h3>{goVote}</h3>
        </div>
    )

}


