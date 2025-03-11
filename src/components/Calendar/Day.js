import React, { useEffect, useState } from 'react'
import { symptomsColors } from '../../constants/symptomsColors';
import { getDayFromDate } from '../../utils/DataUtils';

const Day = (day) => {

    const [backgroundGradient, setBackgroundGradient] = useState(null);

    useEffect(() => {
        if (day) {
            let gradientString = 'conic-gradient(';
            let currentPercentage = 0;

            day.symptoms.forEach((_, index) => {
                const start = currentPercentage;
                const end = currentPercentage + percentages[index];
                gradientString += `${symptomsColors[index]} ${start}% ${end}%, `;
                currentPercentage = end;
            });

            gradientString = gradientString.slice(0, -2) + ')';

            setBackgroundGradient(gradientString);
        }

    }, [day])

    return (
        <section className='day'>
            <div className='day__inner' style={{ background: backgroundGradient}}>
                {getDayFromDate(day.date)}
            </div>
        </section>
    )
}

export default Day
