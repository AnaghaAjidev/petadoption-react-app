import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    Pet Adoption App
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link className="nav-link active" to="/">
                            Add Pet
                        </Link>

                        <Link className="nav-link" to="/search">
                            Search Pet
                        </Link>

                        <Link className="nav-link" to="/delete">
                            Delete Pet
                        </Link>

                        <Link className="nav-link" to="/view">
                            View All Pets
                        </Link>

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar