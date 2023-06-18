import React from 'react'
import '../styles/Feeding.css'


export function Feeding({ total_corn, total_grain, feed_data }) {

    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
        return formattedDate;
    }
    return (
        <section className="page-wrapper">
            <div className="feed-page swine-page">
                <section className="swine-wrapper">
                    <form className="swine-form">
                        <h2 className="feeding-header">SELECT FEED TYPE</h2>
                        <input type="text" placeholder="Corn Based or Grain Based" id="feed" name="feed" required />

                        <input type="text" placeholder="Size: Kg" id="size" name="size" required />

                        <input type="text" placeholder="Name" id="name" name="name" required />

                        <button className="feed-btn ">ADD</button>
                    </form>

                    <section className='info-section'>
                        <div className="corn-info-section">
                            <img src="/assets/corn.png" alt="logo" className="corn" />

                            <div className="corn-info">
                                <p> <span className="info1">{total_corn} </span> <br /> <span className="info2">Kg</span> <br /> <span className="info3">CORN-BASED FEED<br /> IN STOCK</span></p>
                                <p> <span className="info1">{total_grain} </span> <br /> <span className="info2">Kg</span> <br /> <span className="info3">CORN-BASED FEED<br /> IN STOCK</span></p>
                            </div>
                        </div>
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
                                {feed_data !== undefined &&
                                    feed_data.map((feed) => (
                                        <tr key={feed._id}>
                                            <td>{feed.name}</td>
                                            <td>{feed.type}</td>
                                            <td>{feed.size}</td>
                                            <td>{formatDate(feed.createdAt)}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </section>
                </section>
            </div>
        </section>
    )
}
