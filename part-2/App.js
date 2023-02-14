const App = () => {

    return (
        <div>

            <Tweet
                username="JohnnyBravo"
                name="Johnny"
                date={new Date().toDateString()}
                message="Do the monkey with me!"
            />
            <Tweet
                username="spongebobsqpants"
                name="Spongebob"
                date={new Date().toDateString()}
                message="I'm ready!"
            />
            <Tweet
                username="jimmyNeutron"
                name="James"
                date={new Date().toDateString()}
                message="Gotta Blast!"
            />


        </div>
    )
}






ReactDOM.render(<App />, document.getElementById("root"))
