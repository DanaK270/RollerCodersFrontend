import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ParkDetails = () => {
  const params = useParams()
  const { parkId } = params
  const [parkDetail, setParkDetail] = useState({})
  useEffect(() => {
    const getParkDetail = async () => {
      const response = await axios.get(
        `http://localhost:${PORT}/themeparks/view/${parkId}?key=${
          import.meta.env.VITE_PORT
        }`
      )
      setParkDetail(response.data)
    }
    getParkDetail()
  }, [parkId])
  return (
    <div>
      {parkDetail?.map((park) => (
        <div>
          <h1>{park.name}</h1>
          <img src={park.image} alt={park.name}>
            {' '}
          </img>
          <p>{park.description}</p>
          <div>
            <h3>Park Type:</h3>
            {park.parkType}
          </div>
          <div>
            <h3>Location:</h3> {selectedPark.location}
          </div>
          <div>
            <h3>Capacity:</h3> {selectedPark.capacity}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ParkDetails
