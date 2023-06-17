import React from 'react'
import '../styles/Swine.css'
import { useNavigate } from 'react-router-dom';
import { feedURL, swineURL } from '../utils/constants'
import axios from 'axios';




export function Swine() {
    let navigate = useNavigate();

    const addSwine = () => {
        axios.post(`${swineURL}/add-swine`,
            {
                name: event.target.name.value,
                breed: event.target.breed.value,
                gender: event.target.gender.value,
                weight: event.target.weight.value,
                age: event.target.age.value
            }
        ).then((data) => {
            if (data.status_code === 201) {
                console.log('saved successfully');
                navigate('/dashboard');
            } else {
                console.log('Error: ', data.message);
            }
        })
    }

    return (
        <section className="page-wrapper">
            <div className="swine-page">
                <section className="form-wrapper">
                    <form onSubmit={addSwine} className="swine-form">
                        <h2>ADD NEW PIG</h2>
                        <input type="text" placeholder="Name" id="name" name="name" required />

                        <input type="text" placeholder="Breed" id="breed" name="breed" required />

                        <input type="text" placeholder="Gender" id="gender" name="gender" required />

                        <input type="text" placeholder="Weight" id="weight" name="weight" required />

                        <input type="text" placeholder="Age" id="age" name="age" required />

                        <button className="btn ">Submit</button>
                    </form>
                </section>
            </div>
        </section>
    )
}
