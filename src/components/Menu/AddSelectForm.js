import React from 'react'

const AddSelectForm = ({ defaultLabel, optionList }) => {
    return (
        <form className='add-select-form'>
            <div className='add-select-form__block'>
                <Dropdown defaultLabel={defaultLabel} options={optionList} />
                <button type='button'>+</button>
            </div>
            <Message message={message} />
        </form>
    )
}

export default AddSelectForm
