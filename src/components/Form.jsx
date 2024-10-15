import React, { useState } from 'react'
import axios from 'axios'
const AddParkForm = ({ parks }) => {
  const [formData, setFormData] = useState({
    park: '',
    name: '',
    // location: '',
    country: '',
    type: '',
    timezone: '',
    description: '',
    images: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <div>
      <h1>Add a New Park</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div></div>

        <div>
          <label>Park Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* <div>
          <label>Location</label>
          <input
            type="number"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div> */}

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
  )
}

export default AddParkForm
