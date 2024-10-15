// import { useState } from 'react'
// import axios from 'axios'

// const Form = ({ parks, setParks }) => {
//   const initialState = {
//     parkType: '',
//     name: '',
//     descriptopn: '',
//     location: '',
//     countryCode:'',
//     timeZone:'',
//     image:''
//   }

//   const [formState, setFormState] = useState(initialState)

//   const handleChange = (event) => {
//     setFormState({ ...formState, [event.target.id]: event.target.value })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     let response = await axios.post('http://localhost:3001/addPark', formState)
//     setParks([...parks, response.data])
//     setFormState(initialState)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="issueType">Type of Park:</label>
//       <select
//         id="issueType"
//         onChange={handleChange}
//         value={formState.issueType}
//       >
//         <option value="" disabled></option>
//         <option value="outage">Theme Park</option>
//         <option value="billing">Park 2</option>
//         <option value="cancel">Park 3</option>
//       </select>
//       <label htmlFor="subject">Subject:</label>
//       <input
//         type="text"
//         id="subject"
//         onChange={handleChange}
//         value={formState.subject}
//       />
//       <label htmlFor="message">Message</label>
//       <textarea
//         id="message"
//         cols="30"
//         rows="10"
//         onChange={handleChange}
//         value={formState.message}
//       ></textarea>
//       <button type="submit">Send</button>
//     </form>
//   )
// }

// export default Form

import React, { useState } from 'react';

const AddParkForm = ({ parks, user }) => {
  const [formData, setFormData] = useState({
    park: '',
    name: '',
    location: '',
    country: '',
    type: '',
    timezone: '',
    description: '',
    images: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div>
      <h1>Add a New Park</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Park</label>
          <select name="park" value={formData.park} onChange={handleChange}>
            {parks.map((park) => (
              <option key={park._id} value={park._id}>
                {park.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Park Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Location</label>
          <input
            type="number"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Country Code</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Park Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Time Zone</label>
          <input
            type="text"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
          />
        </div>

        <input type="hidden" name="userId" value={user._id} />

        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Image</label>
          <input
            name="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">Add Park</button>
      </form>
    </div>
  );
};

export default AddParkForm;
