import { Component } from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';

// This is creating a class component called App that extends the Component class from React
// It is initializing the state of the App component with an empty monsters array and an empty searchField string
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
      }
      ))
      .catch(error => console.error(error))
  }

  // This 'event' is an object that contains information of the 'onChange' event
  // 'event.target.value' is the value inside the input when the 'event'->'onChange' changes
  // this.setState is necessary to update the state and the react will re-render with this change
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
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
    <div className='App'>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={this.onSearchChange} 
        placeholder='search' 
      />
      <CardList monsters={filteredMonsters} />
    </div>
    )}
}

export default App;
