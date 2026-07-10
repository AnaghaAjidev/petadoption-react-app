import React, { useState } from 'react'

const ViewAllPet = () => {

  const [pets, changePets] = useState([
    {
      petId: "PET401",
      petName: "Bruno",
      species: "Dog",
      breed: "Labrador Retriever",
      age: 2,
      gender: "Male",
      adoptionFee: "2500",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?fm=jpg&q=60&w=1200&auto=format&fit=crop"
    },
    {
      petId: "PET402",
      petName: "Misty",
      species: "Cat",
      breed: "Indian Shorthair",
      age: 1,
      gender: "Female",
      adoptionFee: "1200",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?fm=jpg&q=60&w=1200&auto=format&fit=crop"
    },
    {
      petId: "PET403",
      petName: "Rocky",
      species: "Dog",
      breed: "Pug",
      age: 3,
      gender: "Male",
      adoptionFee: "3000",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?fm=jpg&q=60&w=1200&auto=format&fit=crop"
    },
    {
      petId: "PET404",
      petName: "Goldie",
      species: "Dog",
      breed: "Golden Retriever",
      age: 1,
      gender: "Female",
      adoptionFee: "4000",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?fm=jpg&q=60&w=1200&auto=format&fit=crop"
    },
    {
      petId: "PET405",
      petName: "Shadow",
      species: "Cat",
      breed: "Bombay Cat",
      age: 4,
      gender: "Male",
      adoptionFee: "1500",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?fm=jpg&q=60&w=1200&auto=format&fit=crop"
    },
    {
      petId: "PET406",
      petName: "Luna",
      species: "Cat",
      breed: "Siamese",
      age: 2,
      gender: "Female",
      adoptionFee: "2000",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?fm=jpg&q=60&w=1200&auto=format&fit=crop"
    },
    {
      petId: "PET407",
      petName: "Snowy",
      species: "Rabbit",
      breed: "White Dwarf",
      age: 1,
      gender: "Female",
      adoptionFee: "800",
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?fm=jpg&q=60&w=1200&auto=format&fit=crop"
    },
    {
      petId: "PET408",
      petName: "Simba",
      species: "Dog",
      breed: "Indie (Desi)",
      age: 2,
      gender: "Male",
      adoptionFee: "500",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?fm=jpg&q=60&w=1200&auto=format&fit=crop"
    }
  ])

  return (
    <div className="container mt-4">
      <div className="row g-4">

        {pets.map((pet) => (
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
        ))}

      </div>
    </div>
  )
}

export default ViewAllPet