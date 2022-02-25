import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {

  const [characters, setCharacters] = useState([])

  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value)
  }

  // use useEffect() with an empty array, as the second parameter
  // to execute what is defined in the callback whenever the component 
  // is mounted
  useEffect(() => {
    // fetch the data
    axios.get('https://swapi.py4e.com/api/people')
      .then(response => {
        console.log(response.data.results)
        // set state of characters
        setCharacters(response.data.results)
      })
      .catch(err => console.log(err))

  }, [])

  // this get's executed everytime the variable in the dependency array 
  // changes
  useEffect(() => {
    console.log('name just changed')
    // 
  }, [name])



  return (
    <div className="App">
      <header className="App-header">
        {name ? <strong>Hello {name}</strong> : 'Pls type your name 🌈 🦄'}
        <input type="text" onChange={handleChange} value={name} />
        {characters.map((character, i) => (
          <h1 key={i}>{character.name}</h1>
        ))}
      </header>
    </div>
  )
}

export default App
