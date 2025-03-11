import React from 'react'
import Day from './day'

const Month = (month) => {
    return (
        <section className='month'>
            <div className='month__inner'>
                <div className='month__header'>{month.name} / {month.year}</div>
                <div className='month__data'>
                    {
                        month.map((day) => {
                            <Day key={day.id} day={day} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Month
