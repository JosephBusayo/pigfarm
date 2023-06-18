import React from 'react'


export function Sales() {
    return (
        <section className="page-wrapper">
        <div className="feed-page swine-page">
            <section className="swine-wrapper">
                <form className="swine-form">
                    <h2 className="feeding-header">PIG SOLD</h2>
                    <input type="text" placeholder="Pig ID" id="id" name="id" required />

                    <input type="text" placeholder="Amount" id="amount" name="amount" required />

                    <input type="text" placeholder="Buyer's name" id="name" name="name" required />

                    <button className="feed-btn ">ADD</button>
                </form>

                <section className='info-section'>
                    <table className="feed-table-container">
                        <thead>
                            <tr className="feed-table-header">
                                <th>Feed Name</th>
                                <th>Feed Type</th>
                                <th>Size(Kg)</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className="feed-table" >
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                        </tbody>
                    </table>


                </section>
            </section>
        </div>
    </section>
    )
}
