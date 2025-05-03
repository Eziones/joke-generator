import { useState, useEffect } from 'react'
import Joke from './Joke'

function App() {
  const [joke, setJoke] = useState(null)

  function getNewJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then(res => res.json())
      .then(data => {
        setJoke(data)
      })
  }

  useEffect(() => {
    getNewJoke()
  }, [])

  return (
    <main>
      <Joke joke={joke}/>
      <button onClick={getNewJoke}>Get new Joke !</button>
    </main>
  )
}

export default App
