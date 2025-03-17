import React, { useEffect } from 'react'
import Month from './Month';
import Legend from './Legend';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Breadcrumbs from '../Header/Breadcrumbs';
import './Calendar.css'

const Calendar = () => {

    const { fetchDays } = useStoreActions((actions) => actions.calendarModel);
    const { groupedCalendar } = useStoreState(state => ({
        groupedCalendar: state.calendarModel.groupedCalendar,
    }));

    useEffect(() => {
        fetchDays();
    }, [fetchDays])

    return (
        <section className='calendar'>
            <div className='calendar__outer'>
                <Breadcrumbs path='/home' />
                <div className='container'>
                    <div className='calendar__inner'>
                        <Legend />
                        <div className='calendar__data'>
                            {
                                groupedCalendar && Object.entries(groupedCalendar).map(([monthName, month], index) =>
                                    <Month key={index} month={month} monthName={monthName} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calendar
