import React from 'react'
import Dropdown from '../../utils/Dropdown'
import Message from '../Message'

const AddSelectForm = ({ id, defaultLabel, options, selectedOption,
    handleChangeSelectedItem, status, loading, addDayData }) => {

    return (
        <form className='add-select-form'>
            <div className='add-select-form__block'>
                <Dropdown defaultLabel={defaultLabel} options={options} selectedOption={selectedOption}
                    handleDropdownSelect={handleChangeSelectedItem} />
                <button type='button' className='add-select-form__button'
                    onClick={() => addDayData({ dayId: id, dataId: selectedOption })}>
                    {!loading ? '+' : '...'}
                </button>
            </div>
            <Message message={status} />
        </form>
    )
}

export default AddSelectForm
