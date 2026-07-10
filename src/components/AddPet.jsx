import React from 'react'
import NavBar from './NavBar'

const AddPet = () => {
  return (
    <>
    <NavBar />
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Pet</h2>

        <div className="row g-3">

          <div className="col-12 col-sm-6">
            <label className="form-label">Pet ID</label>
            <input type="text" className="form-control" placeholder="Enter Pet ID" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Pet Name</label>
            <input type="text" className="form-control" placeholder="Enter Pet Name" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Species</label>
            <input type="text" className="form-control" placeholder="Enter Species" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Breed</label>
            <input type="text" className="form-control" placeholder="Enter Breed" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" placeholder="Enter Age" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Gender</label>
            <select className="form-select">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Vaccinated</label>
            <select className="form-select">
              <option>Select Option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Adoption Fee</label>
            <input type="number" className="form-control" placeholder="Enter Adoption Fee" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Image URL</label>
            <input type="url" className="form-control" placeholder="Enter Image URL" />
          </div>

          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3" placeholder="Enter Description"></textarea>
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-success px-4">
              Add Pet
            </button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default AddPet