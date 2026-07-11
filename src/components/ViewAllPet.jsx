import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllPet = () => {
  const [pets, changePets] = useState([])

  const fetchData = () => {

    axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(
      (response) => {
        changePets(response.data)
      }
    ).catch()
  }

  useEffect(
    () => {
      fetchData()
    }, []
  )
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row g-4">

          {pets.map((pet, index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={pet.petId}>

                <div className="card border-0 shadow-lg rounded-4 h-100">

                  <img
                    src={pet.image}
                    alt={pet.petName}
                    className="card-img-top rounded-top-4"
                    style={{ height: "230px", objectFit: "cover" }}
                  />

                  <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold mb-0">{pet.petName}</h5>

                      <span className="badge bg-info text-dark">
                        {pet.species}
                      </span>
                    </div>

                    <p className="text-muted mb-2">
                      <strong>Breed:</strong> {pet.breed}
                    </p>

                    <div className="d-flex justify-content-between mb-2">
                      <span><strong>Age:</strong> {pet.age} yrs</span>
                      <span><strong>Gender:</strong> {pet.gender}</span>
                    </div>

                    <h5 className="text-success fw-bold">
                      ₹{pet.adoptionFee}
                    </h5>

                  </div>

                  <div className="card-footer bg-white border-0">
                    <button className="btn btn-success w-100 rounded-pill">
                      Adopt Now
                    </button>
                  </div>

                </div>

              </div>
            )
          })}


        </div>
      </div>
    </>
  )
}

export default ViewAllPet