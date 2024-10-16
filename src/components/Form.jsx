import React, { useState } from 'react'
import axios from 'axios'
import FileUploader from './FileUploader'

const AddParkForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '',
    parkType: '',
    description: '',
    image: null
  })
  // const [file, setFile] = useState()

  // const sendImage = async (e, file, description) => {
  //   e.preventDefault()

  //   const formData = new FormData()
  //   formData.append('image', file)

  //   const result = await axios.post(
  //     'http://localhost:8080/api/images',
  //     formData,
  //     {
  //       headers: { 'Content-Type': 'multipart/form-data' }
  //     }
  //   )
  //   console.log(result.data)
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFileChange = (e, file) => {
    setFormData({
      ...formData,
      image: file
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post(
      'http://localhost:4000/themeparks/addpark',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    )
    console.log(result.data)
  }

  return (
    <div>
      <h1>Add a New Park</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '50px' }}>
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

        <div>
          <label>Country Code</label>
          <input
            type="text"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Park Type</label>
          <input
            type="text"
            name="parkType"
            value={formData.parkType}
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
            filename={formData.countryCode.image}
            name="image"
            onChange={(e) => handleFileChange(e, e.target.files[0])}
            type="file"
            accept="image/*"
          ></input>
        </div>

        <button type="submit">Add Park</button>
      </form>
    </div>
  )
}

export default AddParkForm
