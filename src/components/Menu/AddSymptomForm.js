import React from 'react'
import AddSelectForm from './AddSelectForm';

const AddSymptomForm = () => {

    const symptomList = [];
    const message = [];
    return (
        <AddSelectForm defaultLabel='Select a product' options={symptomList} message={message} />
    )
}

export default AddSymptomForm