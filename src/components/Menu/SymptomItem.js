import React from 'react'
import { symptomsColors } from '../../constants/symptomsColors'
import { useStoreActions } from 'easy-peasy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

import './SymptomItem.css'

const SymptomItem = ({ item, dayId }) => {

    const { deleteDaySymptomById } = useStoreActions((actions) => actions.calendarModel);

    return (
        <section className='symptom-item'>
            <div className='symptom-item__block'>
                <div className='symptom-item__block symptom-item__block_color'>
                    <div className='symptom-item__color' style={{ background: symptomsColors[item.id] }}></div>
                </div>
                <div className='symptom-item__name'>{item.name}</div>
            </div>
            <div className='symptom-item__block symptom-item__block_tools' onClick={() => deleteDaySymptomById({ dayId: dayId, dataId: item.id })}>
                <FontAwesomeIcon icon={faRemove} />
            </div>
        </section>
    )
}

export default SymptomItem
