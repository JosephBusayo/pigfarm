import React from 'react'
import '../styles/Swine.css'
import { useNavigate } from 'react-router-dom';
import { feedURL, swineURL } from '../utils/constants'
import axios from 'axios';




export function Swine() {
    let navigate = useNavigate();

    const addSwine = () => {
        axios
            .post(`${swineURL}/add-swine`, {
                name: event.target.name.value,
                breed: event.target.breed.value,
                gender: event.target.gender.value,
                weight: event.target.weight.value,
                age: event.target.age.value,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    };

    return (
        <section className="page-wrapper">
            <div className="swine-page">
                <section className="form-wrapper">
                    <form onSubmit={addSwine} className="swine-form">
                        <h2 className="header-text">ADD NEW PIG</h2>
                        <input type="text" placeholder="Name" id="name" name="name" required />

                        <input type="text" placeholder="Breed" id="breed" name="breed" required />

                        <input type="text" placeholder="Gender" id="gender" name="gender" required />

                        <input type="text" placeholder="Weight" id="weight" name="weight" required />

                        <input type="text" placeholder="Age" id="age" name="age" required />

                        <button className="swine-btn">Submit</button>
                    </form>
                </section>
            </div>
        </section>
    )
}
