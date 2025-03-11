import React from 'react'
import AddSelectForm from './AddSelectForm';

const AddProductForm = () => {

    const productList = [];
    const message = [];
    return (
        <AddSelectForm defaultLabel='Select a product' options={productList} message={message} />
    )
}

export default AddProductForm
