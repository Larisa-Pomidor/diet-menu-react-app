import React from 'react'
import AddSelectForm from './AddSelectForm';

const AddSymptomForm = ({ id, symptoms, status, loading, updateDayById }) => {

    const [selectedOption, setSelectedOption] = useState({ symptomId: undefined });

    const handleChangeSelectedItem = (id) => {
        setSelectedOption({ symptomId: id })
    };

    return (
        <AddSelectForm id={id} defaultLabel='Select a symptom' options={symptoms}
            selectedOption={selectedOption} handleChangeSelectedItem={handleChangeSelectedItem}
            status={status} loading={loading} updateDayById={updateDayById} setSelectedOption={setSelectedOption} />
    )
}

export default AddSymptomForm