import { useState } from 'react'
import { getRandomPerson } from '../api'
import { useEffect } from 'react'

export const Home = () => {
  const [person, setPerson] = useState({})
  useEffect(() => {
    getRandomPerson().then(({ data }) => {
      setPerson(data)
    })
  }, [])

  return (
    <div className="App">
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  )
}
