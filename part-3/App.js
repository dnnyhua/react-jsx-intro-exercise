const App = () => (

    <div>
        <Person
            name="JohnnyBravo"
            age={19}
            hobbies={["videogames", "camping", "painting", "cooking"]}
        />
        <Person
            name="mickeymouse"
            age={19}
            hobbies={["magic", "painting"]}
        />
        <Person
            name="spongebob"
            age={19}
            hobbies={["jellyfishing", "cooking"]}
        />
    </div>


)

ReactDOM.render(<App />, document.getElementById("root"))