import { Component, useState, useEffect } from 'react'; // Import Component, useState and useEffect from React
import CardList from './component/card-list/card-list.component'; // Import CardList component 
import SearchBox from './component/search-box/search-box.component'; // Import SearchBox component 
import './App.css'; // Import App.css to apply styles

const App = () => {
  const [searchField, setSearchField] = useState(''); // Define a state to search box and the function to update it
  
  const onSearchChange = (event) => { // Define the function triggered when the search changes
    const searchFieldString = event.target.value.toLocaleLowerCase(); // Converts the value of search field to lowercase
    setSearchField(searchFieldString); // Updates the state with the search values
  };

  const [monsters, setMonsters] = useState([]); // Define a state to monsters and the function to update it

  useEffect(() => { // Executes the effect of load the API informations
    fetch('https://jsonplaceholder.typicode.com/users') // Do the GET to the API
      .then((response) => response.json()) // Converts the response to JSON object
      .then((users) => setMonsters(users)) // Updates the state with monster values
      .catch((error) => console.error(error)); // Cares about the errors
  }, []); // Defines an empty array of dependencies to run only once

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  ); // Filter the monsters who names includes the searchbox values

  return (
    // Render the component App with the class CSS 'App'
      // Render the title of the app
    <div className='App'> 
      <h1 className='app-title'> Monsters Rolodex </h1> 

      <SearchBox // Render the component SearchBox to allow the search of monsters
        className='monsters-search-box' // Define the class CSS to the component
        onChangeHandler={onSearchChange} // Define the function to be triggered when searchbox changes
        placeholder='search' // Define the text displayed at searchbox
      />

      <CardList monsters={filteredMonsters} /> 
    </div>
    // Render the component CardList with the filtered monsters
  );
};

export default App; // Export the componente App by default
