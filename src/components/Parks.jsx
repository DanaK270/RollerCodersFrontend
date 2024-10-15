import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Parks = () => {
  const [parks, setParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    fetchParks();
  }, []);

  const fetchParks = async () => {
    try {
      const response = await axios.get(
       
      );
      if (Array.isArray(response.data)) {
        setParks(response.data);
        setSelectedPark(response.data[0]);
      } else {
        console.error(":", response.data);
      }
    } catch (error) {
      console.error("", error);
    }
  };

  const handleParkClick = (park) => {
    setSelectedPark(park);
  };

  return (
    <div>
      <h1 className="parks-title">Explore All Parks</h1>
      <div className="park-container">
        <ul className="parks-list">
          {parks.map((park) => (
            <li key={park._id} className="park-item">
              <div onClick={() => handleParkClick(park)}>
                <a href={`#${park.name}`} className="park-link">
                  {park.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedPark && (
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
  );
};

export default Parks;