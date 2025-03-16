import React from 'react'
import { getWeekDayFromIndex } from '../../utils/DataUtils'
import './MenuListItem.css'
import MenuProductItem from './MenuProductItem'

const MenuListItem = ({ item }) => {
    return (
        <section className='menu-item'>
            <div className='menu-item__inner'>
                <div className='menu-item__type'>{item.type}</div>
                <div className='menu-item__block menu-item__block_date'>
                    <div className='menu-item__date-block-inner'>
                        <div className='menu-item__week-day'>
                            {getWeekDayFromIndex((new Date(item.date)).getDay())}
                        </div>
                        <div className='menu-item__week-date'>
                            {(new Date(item.date)).getDate()}
                        </div>
                    </div>
                </div>
                <div className='menu-item__block menu-item__block_product-list'>
                    {item.products.map((product, index) =>
                        <MenuProductItem key={index} item={product} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default MenuListItem
