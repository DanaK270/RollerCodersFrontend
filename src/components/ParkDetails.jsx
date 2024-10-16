import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ParkDetails = () => {
  const { parkDetailsId } = useParams()
  const [parkDetailDetails, setParkDetailDetails] = useState(null)

  const [parkDetails, setParkDetails] = useState([])

  const getParkDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:${PORT}/themeparks/view/${parkDetailsId}`
      )
      setParkDetails(res.data)
      console.log(parkDetails)
    } catch (err) {
      console.error('Error fetching Park Details:', err)
    }
  }

  useEffect(() => {
    getParkDetails()
  }, [parkDetailsId])

  // setParkDetail(response.data)
  // console.log(response.data)

  return parkDetails ? (
    <div>
      <div>
        <h1>{parkDetails.name}</h1>
        <img src={parkDetails.image} alt={parkDetails.name}>
          {' '}
        </img>
        <p>{parkDetails.description}</p>
        <div>
          <h3>parkDetail Type:</h3>
          {parkDetails.parkType}
        </div>
        <div>
          <h3>Location:</h3> {parkDetails.location}
        </div>
        <div>
          <h3>Capacity:</h3> {parkDetails.capacity}
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default ParkDetails
