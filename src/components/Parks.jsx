import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const Parks = () => {
  const [parks, setParks] = useState([])
  const [selectedPark, setSelectedPark] = useState(null)
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

  const handleParkClick = (park) => {
    setSelectedPark(park)
  }

  const handleDelete = async (id) => {
    try {
      await axios.get(`http://localhost:${PORT}/themeparks/delete/${id}`)
      setParks(parks.filter((park) => park._id !== id))
    } catch (error) {
      console.error('Error deleting park:', error)
    }
  }

  return (
    <div>
      <h1 className="parks-title">Explore All Parks</h1>
      <div className="park-container" style={{ marginBottom: '30px' }}>
        <div className="parks-list row">
          {parks?.map((park) => {
            const imageSrc = park.image.startsWith('http')
              ? park.image
              : `http://localhost:4000/images/${park.image}`
            console.log('Image path:', imageSrc) // Debug the path

            return (
              <div
                className="card col-md-4 mb-4 park-item"
                key={park.id || park._id}
              >
                <img src={imageSrc} alt="park image" />
                <div
                  className="card-body "
                  onClick={() => handleParkClick(park)}
                >
                  <Link to={`/parks/${park._id || park.id}`}>
                    <h3>{park.name}</h3>
                  </Link>
                </div>
                {park._id && (
                  <button onClick={() => handleDelete(park._id)}>Delete</button>
                )}
              </div>
            )
          })}
        </div>
      </div>
      {selectedPark && ( //this does not work, i think when the user selects a park we should move them to the park deatils page
        <div className="park-details-container">
          <div className="park-details">
            <h2>{selectedPark.name}</h2>
            <p>Location: {selectedPark.location}</p>
            <p>Capacity: {selectedPark.capacity}</p>
            <p>Description: {selectedPark.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Parks
