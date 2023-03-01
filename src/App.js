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

  handleChange = (event) => {
    this.setState({ searchField: event.target.value});
  }

  render() {
  const { monsters, searchField } = this.state;
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
