import { useStoreActions } from 'easy-peasy';
import React from 'react'

import './ProductItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const ProductItem = ({ item, dayId }) => {

    const { deleteDayProductById } = useStoreActions((actions) => actions.calendarModel);

    return (
        <section className='product-item'>
            {item && <>
                <div className='product-item__block product-item__block_image'>
                    {item.imageUrl &&
                        <div className='product-item__image'>
                            <img src={`${require(`../../assets/img/products/${item.imageUrl}`)}`} alt='' />
                        </div>
                    }
                </div>
                <div className='product-item__block product-item__block_name'>
                    <div className='product-item__name'>{item.name}</div>
                </div>
                <div className='product-item__block product-item__block_tools'
                    onClick={() => deleteDayProductById({ dayId: dayId, dataId: item.id })}>
                    <FontAwesomeIcon icon={faRemove} />
                </div>
            </>
            }
        </section>
    )
}

export default ProductItem
