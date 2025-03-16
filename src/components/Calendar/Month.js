import React from 'react'
import Day from './Day'
import './Month.css'

const Month = ({ month, monthName }) => {
    return (
        <section className='month'>
            <div className='month__inner'>
                <div className='month__header'>{monthName}</div>
                <div className='month__data'>
                    {
                        month && month.map((day) =>
                            <Day key={day.id} day={day} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Month
