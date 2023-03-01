import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // gets from API the infos of users to display the names
  // When it receives the response, it converts to JSON
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() =>{
        return {monsters: users}
      }, () => {
        console.log(this.state);
      }
      ))
      .catch(error => console.error(error))
  }

  // This 'event' is an object that contains information of the 'onChange' event
  // 'event.target.value' is the value inside the input when the 'event'->'onChange' changes
  // this.setState is necessary to update the state and the react will re-render with this change
  handleChange = (event) => {
    this.setState({ searchField: event.target.value});
  }

  render() {
    // This line makes the consts 'monster' and 'searchField' possible to use without the 'this.state.monsters'
    // and 'this.state.searchField'
  const { monsters, searchField } = this.state;

  // ".filter" waits true or false of (if monster.name includes what is at searchField variable)
  // If its true, the 'filter' save that monster on the const filteredMonsters that is an array
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <input className='search-box' 
      type='search' 
      placeholder='search monsters' 
      onChange={this.handleChange} />

    {
      filteredMonsters.map((monster)=>{
        return <h1 key={monster.name}>{monster.name}</h1>;
      })
    }
      </div>
    )}
}

export default App;
