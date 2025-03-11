import React from 'react'

const MenuProductItem = (item) => {
    return (
        <section className='menu-product-item'>
            <div className='menu-product-item__inner'>
                <div className='menu-product-item__block menu-product-item__block_image'>
                    <div className='menu-product-item__image'>{item.imageUrl}</div>
                </div>
                <div className='menu-product-item__block'>
                    <div className='menu-product-item__name'>{item.name}</div>
                </div>
            </div>
        </section>
    )
}

export default MenuProductItem
