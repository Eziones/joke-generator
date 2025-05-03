import { useState } from "react"

export default function Joke(props) {
  const joke = props.joke
  const [reveal, setReveal] = useState(false)

  if (!joke) {
    return <p></p>
  }

  if (joke.type === 'single') {
    return (
      <section className='joke-container'>
        <p>{joke.joke}</p>
      </section>
    )
  }

  return (
    <section className='joke-container'>
      <h1>{joke.setup}</h1>
      <p className={!reveal ? 'hidden' : ''} onClick={() => setReveal(prev => !prev)}>{joke.delivery}</p>
    </section>
  )
  // return (
  //   <section className='joke-container'>
  //     <h1>What's the difference between England and a tea bag?</h1>
  //     <p>The tea bag stays in the cup longer.</p>
  //   </section>
  // )
}