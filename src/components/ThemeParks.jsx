import { useEffect, useState } from 'react'
import axios from 'axios'

const ThemeParks = () => {
  const [parks, setParks] = useState(null)
  const PORT = import.meta.env.VITE_PORT

  useEffect(() => {
    const getParks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:${PORT}/themeparks/view`
        )
        setParks(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getParks()
  }, [])
  return (
    <div>
      <h1>Theme Parks</h1>
      {parks?.map((park) => (
        <div key={park.id}>{park.name}</div>
        //<ParkCard park={park} />
      ))}
    </div>
  )
}

export default ThemeParks
