import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

const Parks = () => {
  const [parks, setParks] = useState([])
  const [selectedPark, setSelectedPark] = useState(null)
  const PORT = import.meta.env.VITE_PORT

  // useEffect(() => {
  //   fetchParks();
  // }, []);

  // const fetchParks = async () => {
  //   try {
  //     const response = await axios.get(

  //     );
  //     if (Array.isArray(response.data)) {
  //       setParks(response.data);
  //       setSelectedPark(response.data[0]);
  //     } else {
  //       console.error(":", response.data);
  //     }
  //   } catch (error) {
  //     console.error("", error);
  //   }
  // };

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

  return (
    <div>
      <h1 className="parks-title">Explore All Parks</h1>
      <div className="park-container">
        <div className="parks-list row">
          {parks?.map((park) => (
            <div class="card col-md-3 mb-4 park-item" key={park.id}>
              <img src={park.image} alt="park image" />

              <div class="card-body " onClick={() => handleParkClick(park)}>
                <h3>{park.name}</h3>
              </div>
            </div>
          ))}
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
