import React from 'react'
import { symptomsColors } from '../../constants/symptomsColors'

const SymptomItem = (item, index) => {
    return (
        <section className='symptom-item'>
            <div className='symptom-item__block'>
                <div className='symptom-item__index'>{index}</div>
                <div className='symptom-item__name'>{item.name}</div>
            </div>
            <div className='symptom-item__block symptom-item__block_color'>
                <div className='symptom-item__color' style={{ background: symptomsColors[index] }}></div>
            </div>
            <div className='symptom-item__block symptom-item__block_tools'>
                Delete
            </div>
        </section>
    )
}

export default SymptomItem
