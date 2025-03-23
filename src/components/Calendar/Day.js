import React, { useEffect, useState } from 'react'
import { symptomsColors } from '../../constants/symptomsColors';
import { getDayFromDate } from '../../utils/DataUtils';
import './Day.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

const Day = ({ day, isFiltered }) => {

    const [backgroundGradient, setBackgroundGradient] = useState(null);

    useEffect(() => {
        if (day) {
            let gradientString = 'conic-gradient(';
            let currentPercentage = 0;
            const symptomsLength = day.symptoms.length;

            day.symptoms.forEach((symptom) => {
                const start = currentPercentage;
                const end = currentPercentage + 100 / symptomsLength;
                gradientString += `${symptomsColors[symptom.id]} ${start}% ${end}%, `;
                currentPercentage = end;
            });

            gradientString = gradientString.slice(0, -2) + ')';

            setBackgroundGradient(gradientString);
        }

    }, [day])

    return (
        <section className='day'>
            {day.date &&
                <Link to={`/day/${day.id}`}>
                    {console.log(day)}
                    <div className={`day__inner ${(isFiltered && day.cheated) ? 'day__inner_cheated' : ''}`}
                        style={{ background: backgroundGradient }}>
                        {
                            day.cheated &&
                            <div className='day__warning'>
                                <FontAwesomeIcon icon={faWarning} />
                            </div>
                        }
                        <div className='day__number'>
                            {getDayFromDate(day.date)}
                        </div>
                    </div>
                </Link>
            }
        </section>
    )
}

export default Day
