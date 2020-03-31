import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ""
        };
    }

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    setSearchFieldValue = event => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;

        const filteredArray = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="Search monsters"
                    handleChange={this.setSearchFieldValue}
                ></SearchBox>
                <CardList monsters={filteredArray}></CardList>
            </div>
        );
    }
}

export default App;
