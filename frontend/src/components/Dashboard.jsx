import React from 'react'
import '../styles/Dashboard.css'

export function Dashboard({ swine_data, total_corn, total_grain }) {
    const breeds = []
    let male = 0
    let female = 0

    if (swine_data !== undefined) {
        swine_data.forEach((swine) => {
            if(swine.gender.toLowerCase() === "male"){
                male +=1
            }
            if(swine.gender.toLowerCase() === "female"){
                female +=1
            }
            if (!breeds.includes(swine.breed)) {
                breeds.push(swine.breed)
            }
        })
    }
    return (
        <section className="page-wrapper">
            <div className="feed-page swine-page">
                <section className="swine-wrapper">

                    <section className="details">
                        <img src="/assets/logo_white.png" alt="logo" className="dashboard-pig" />

                        <div className="pig-count">
                            <p> <span className="pig-info1">{swine_data && swine_data.length}</span> <br /> <span className="pig-info2">TOTAL PIGS</span> </p>
                            <p> <span className="pig-info1">{breeds.length}</span> <br /> <span className="pig-info2">BREEDS</span> </p>
                        </div>
                        <div className='gender-count'>
                            <p> <span className="gender-info1">{female}</span> <br /> <span className="gender-info2">FEMALES</span> </p>
                            <p> <span className="gender-info1">{male}</span> <br /> <span className="gender-info2">MALES</span> </p>
                        </div>

                    </section>

                    <section className='info-section dashboard-info'>
                        <div className="corn-info-section">
                            <img src="/assets/corn.png" alt="logo" className="corn" />

                            <div className="corn-info">
                                <p> <span className="info1">{total_corn} </span> <br /> <span className="info2">Kg</span> <br /> <span className="info3">CORN-BASED FEED<br /> IN STOCK</span></p>
                                <p> <span className="info1">{total_grain} </span> <br /> <span className="info2">Kg</span> <br /> <span className="info3">CORN-BASED FEED<br /> IN STOCK</span></p>
                            </div>
                        </div>

                        <div className="sale-detail">
                            <p> <span className='sale-info1'>60</span> <br /> <span className='sale-info2'>PIGS SOLD</span></p>
                        </div>

                    </section>

                </section>
            </div>
        </section>
    )
}
