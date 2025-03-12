import React from 'react'
import AddSelectForm from './AddSelectForm';

const AddSymptomForm = ({ id, symptoms, status, loading, addDayData }) => {

    const [selectedOption, setSelectedOption] = useState({ symptomId: undefined });

    const handleChangeSelectedItem = (id) => {
        setSelectedOption({ symptomId: id })
    };

    return (
        <AddSelectForm id={id} defaultLabel='Select a symptom' options={symptoms}
            selectedOption={selectedOption} handleChangeSelectedItem={handleChangeSelectedItem}
            status={status} loading={loading} addDayData={addDayData} setSelectedOption={setSelectedOption} />
    )
}

export default AddSymptomForm