import React, { useState } from 'react'
import Day from './Day'
import './Month.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

const Month = ({ month, monthName }) => {

    const [isFiltered, setIsFiltered] = useState(true);

    return (
        <section className='month'>
            {month &&
                <div className='month__inner'>
                    {monthName &&
                        <div className='month__header'>{monthName}
                            <span onClick={() => setIsFiltered(prev => !prev)} ><FontAwesomeIcon icon={faWarning} /></span>
                        </div>
                    }
                    <div className='month__data'>
                        {
                            month && month.map((day) =>
                                <Day key={day.id} day={day} isFiltered={isFiltered} />
                            )
                        }
                    </div>
                </div>
            }
        </section>
    )
}

export default Month
