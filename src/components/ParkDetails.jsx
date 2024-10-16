import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ParkDetails = () => {
  const params = useParams()
  const { parkId } = params()
  const [parkDetail, setParkDetail] = useState(null)
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
  return parkDetail ? (
    <div>
      <div>
        <h1>{parkDetail.name}</h1>
        <img src={parkDetail.image} alt={parkDetail.name}>
          {' '}
        </img>
        <p>{parkDetail.description}</p>
        <div>
          <h3>parkDetail Type:</h3>
          {parkDetail.parkType}
        </div>
        <div>
          <h3>Location:</h3> {parkDetail.location}
        </div>
        <div>
          <h3>Capacity:</h3> {parkDetail.capacity}
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default ParkDetails
