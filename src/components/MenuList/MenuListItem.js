import React from 'react'
import { getWeekDayFromIndex } from '../../utils/DataUtils'
import MenuProductItem from './MenuProductItem'

const MenuListItem = ({ item, key }) => {
    return (
        <section className='menu-item'>
            <div className='menu-item__inner'>
                <div className='menu-item__block'>
                    {getWeekDayFromIndex(key)}
                </div>
                <div className='menu-item__block'>
                    {item.products.map((product) => {
                        <MenuProductItem item={product} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default MenuListItem
