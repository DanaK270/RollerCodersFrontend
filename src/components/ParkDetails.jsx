import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ParkDetails = ({ parkDetails }) => {
  const params = useParams()
  const { parkDetailsId } = params()
  const [parkDetail, setParkDetail] = useState(null)
  useEffect(() => {
    console.log('Park Details Data:', parkDetails)
    console.log('Park Details ID from URL:', parkDetailsId)
  })

  setParkDetail(response.data)
  console.log(response.data)

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
