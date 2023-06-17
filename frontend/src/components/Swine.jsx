import React from 'react'
import '../styles/Swine.css'
import { Sidebar } from './Sidebar'


export function Swine() {
    return (
        <section className="page-wrapper">
            <div className="swine-page">
                <section className="form-wrapper">
                    <form className="swine-form">
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
