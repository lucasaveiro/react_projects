import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      {
        name: 'Linda',
        id: '1',
      },
      {
        name: 'Frank',
        id: '2',
      },
      {
        name: 'Jacky',
        id: '3',
      },
      {
        name: 'Anmre',
        id: '4',
      },
      ]
    };
      

    };

  render() {
    return <div className="App">
    {
      this.state.monsters.map((monster)=>{
        return <h1 key={monster.name}>{monster.name}</h1>;
      })
    }
      </div>
  }
}

export default App;
