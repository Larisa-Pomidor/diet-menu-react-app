import React from 'react'
import { symptomsColors } from '../../constants/symptomsColors';

const Legend = () => {
    const symptoms = [];

    return (
        <section className='legend'>
            <div className='legend__inner'>
                <div className='legend__list'>
                    {symptoms.map((symptom, index) => {
                        <div key={index} className='legend__item'>
                            <div className='legend__color'>
                                {symptomsColors[index]}
                            </div>
                            <div className='legend__symptom-name'>
                                {symptom.name}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Legend
