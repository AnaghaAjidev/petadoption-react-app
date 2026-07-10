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

                    {pets.map(
                        (pet, index) => {
                            return (

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={pet.petId}>
                                    <div className="card h-100 shadow">

                                        <img
                                            src={pet.image}
                                            className="card-img-top"
                                            alt={pet.petName}
                                            style={{ height: "220px", objectFit: "cover" }}
                                        />

                                        <div className="card-body">
                                            <h5>{pet.petName}</h5>
                                            <p><strong>Species:</strong> {pet.species}</p>
                                            <p><strong>Breed:</strong> {pet.breed}</p>
                                            <p><strong>Age:</strong> {pet.age}</p>
                                            <p><strong>Gender:</strong> {pet.gender}</p>
                                            <p><strong>Adoption Fee:</strong> ₹{pet.adoptionFee}</p>
                                        </div>

                                    </div>
                                </div>


                            )

                        }
                    )}


                </div>
            </div>
        </>
    )
}

export default ViewAllPet