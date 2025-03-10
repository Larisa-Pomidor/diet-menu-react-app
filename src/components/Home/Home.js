import React from 'react'

const Home = () => {
    return (
        <section className='home'>
            <div className='home__outer'>
                <div className='container'>
                    <div className='home__inner'>
                        <div className='home__menu'>
                            <Link to='/calendar'>Calendar</Link>
                            <Link to='/menu'>Menu</Link>
                            <Link to='/random'>Generate diet menu</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
