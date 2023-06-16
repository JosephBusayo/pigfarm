import React from 'react'
import { Link } from 'react-router-dom'


export function Sidebar() {
    return (
        <section className="sidebar">
            <div className="upper">
                <div className="logo_container">
                    <img src="" alt="" className="logp" />
                </div>

                <>
                    <div className="profile_container">
                        <img src="/assets/james.png" alt="" className="profile" />
                    </div>
                    <p className="james">James</p>
                </>
            </div>

            <div className="nav_menu">
                <Link
                    to="/dashboard"
                    className=""
                >
                    <button className='btn' >
                        Dashboard
                    </button>
                </Link>

                <Link
                    to="/swine"
                    className=""
                >
                    <button className='btn' >
                        Swine
                    </button>
                </Link>

                <Link
                    to="/feeding"
                    className=""
                >
                    <button className='btn' >
                        Feeding
                    </button>
                </Link>

                <Link
                    to="/sales"
                    className=""
                >
                    <button className='btn' >
                        Sales
                    </button>
                </Link>
            </div>
        </section>
    )
}
