import "./App.css";
import { Component } from "react/cjs/react.production.min";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFeild: e.target.value });
  }; //automatically binds arrow function

  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMosters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    console.log(filteredMosters);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"search monsters"}
          handleChange={this.handleChange}
          // handleChange={(e) => this.setState({ searchFeild: e.target.value })}
        />

        <CardList monsters={filteredMosters} />

        {/* <CardList monsters={this.state.monsters} /> */}
      </div>
    );
  }
}

export default App;
