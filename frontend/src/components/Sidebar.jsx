import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Sidebar.css'

export function Sidebar() {
    return (
        <section className="sidebar">
            <div className="upper">
                <div className="logo-container">
                    <img src="/assets/logo_white.png" alt="logo" className="logo" />
                </div>

                <div>
                    <div className="profile-container">
                        <img src="/assets/james.png" alt="profile" className="profile" />
                    </div>
                    <p className="james">James</p>
                </div>
            </div>

            <div className="nav_menu">
                <Link
                    to="/dashboard"
                    className="link"
                >
                    <img src="/assets/board_icon.png" alt="icon" className="nav-icon" />

                    <button className='btn' >
                        Dashboard
                    </button>
                </Link>

                <Link
                    to="/swine"
                    className="link"
                >
                    <img src="/assets/swine_icon.png" alt="icon" className="nav-icon" />

                    <button className='btn' >
                        Swine
                    </button>
                </Link>

                <Link
                    to="/feeding"
                    className="link"
                >
                    <img src="/assets/feed_icon.png" alt="icon" className="nav-icon" />

                    <button className='btn' >
                        Feeding
                    </button>
                </Link>

                <Link
                    to="/sales"
                    className="link"
                >
                    <img src="/assets/feed_icon.png" alt="icon" className="nav-icon" />

                    <button className='btn' >
                        Sales
                    </button>
                </Link>
            </div>
        </section>
    )
}
