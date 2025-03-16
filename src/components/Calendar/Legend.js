import React, { useEffect, useState } from 'react'
import { symptomsColors } from '../../constants/symptomsColors';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './Legend.css'

const Legend = () => {
    const [active, setActive] = useState(false);
    const { fetchSymptoms } = useStoreActions((actions) => actions.symptomModel);

    const { symptoms } = useStoreState(state => ({
        symptoms: state.symptomModel.symptoms,
    }));

    useEffect(() => {
        fetchSymptoms();
    }, [fetchSymptoms])

    return (
        <section className='legend'>
            {symptoms &&
                <div className='legend__inner'>
                    <div className={`legend__control ${active ? 'legend__control_active' : ''}`} onClick={() => setActive(prev => !prev)}>
                        +
                    </div>
                    {active &&
                        <div className='legend__list'>
                            {symptoms.map((symptom, index) =>
                                <div key={index} className='legend__item'>
                                    <div className='legend__color' style={{ background: symptomsColors[symptom.id] }}>
                                    </div>
                                    <div className='legend__symptom-name'>
                                        {symptom.name}
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </div>
            }
        </section>
    )
}

export default Legend
