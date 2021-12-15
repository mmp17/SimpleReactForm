import React, {Component} from "react";
import './App.css';
import { characters } from "./data";


import Table from "./Table";


class App extends Component {
    state = {
        characters: characters
    }

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }


    render() {
        const { characters } = this.state;

      return (
        <div className="container">
            <h1>React Props & State App</h1>
          <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        </div>
      )
    }
  }

export default App;