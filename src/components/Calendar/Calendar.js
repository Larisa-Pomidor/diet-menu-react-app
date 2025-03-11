import React from 'react'
import Month from './Month';
import Legend from './Legend';

const Calendar = () => {

    const calendar = [];

    return (
        <section className='calendar'>
            <div className='calendar__outer'>
                <div className='calendar__inner'>
                    <Legend />
                    <div className='calendar__data'>
                        {
                            calendar.map((month) => {
                                <Month key={month.id} month={month} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calendar
