import React from 'react'
import AddSelectForm from './AddSelectForm';

const AddProductForm = ({ id, products, status, loading, updateDayById }) => {

    const [selectedOption, setSelectedOption] = useState({ symptomId: undefined });

    const handleChangeSelectedItem = (id) => {
        setSelectedOption({ symptomId: id })
    };

    return (
        <AddSelectForm id={id} defaultLabel='Select a product' options={products}
            selectedOption={selectedOption} handleChangeSelectedItem={handleChangeSelectedItem}
            status={status} loading={loading} updateDayById={updateDayById} setSelectedOption={setSelectedOption} />
    )
}

export default AddProductForm