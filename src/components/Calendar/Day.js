import React, { useEffect, useState } from 'react'
import { symptomsColors } from '../../constants/symptomsColors';
import { getDayFromDate } from '../../utils/DataUtils';
import './Day.css'
import { Link } from 'react-router-dom';

const Day = ({ day }) => {

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
            <Link to={`/day/${day.id}`}>
                <div className='day__inner' style={{ background: backgroundGradient }}>
                    <div className='day__number'>
                        {getDayFromDate(day.date)}
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default Day
