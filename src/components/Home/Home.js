import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { useStoreActions } from 'easy-peasy';

const Home = () => {

    const { generateMenu } = useStoreActions((actions) => actions.calendarModel);

    return (
        <section className='home'>
            <div className='home__outer'>
                <div className='container'>
                    <div className='home__inner'>
                        <div className='home__menu'>
                            <Link to='/calendar'>Calendar</Link>
                            <Link to='/menu-list'>Menu</Link>
                            <Link onClick={generateMenu}>Generate diet menu</Link>
                        </div>
                    </div>
                    <div className='home__background'>
                        <img src='/assets/img/background-1.svg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
