import { useStoreActions } from 'easy-peasy';
import React from 'react'

const ProductItem = (item, index) => {

    const { deleteDayProductById } = useStoreActions((actions) => actions.calendarModel);

    return (
        <section className='product-item'>
            <div className='product-item__block'>
                <div className='product-item__index'>{index}</div>
                <div className='product-item__name'>{item.name}</div>
            </div>
            <div className='product-item__block product-item__block_image'>
                <div className='product-item__image'>{item.imageUrl}</div>
            </div>
            <div className='product-item__block product-item__block_tools' onClick={() => deleteDayProductById(item.id)}>
                Delete
            </div>
        </section>
    )
}

export default ProductItem
