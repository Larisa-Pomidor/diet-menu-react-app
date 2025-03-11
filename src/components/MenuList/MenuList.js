import React from 'react'
import MenuListItem from './MenuListItem';

const MenuList = () => {

    const menuList = [];

    return (
        <section className='menu-list'>
            <div className='menu-list__outer'>
                <div className='container'>
                    <div className='menu-list__inner'>
                        {
                            menuList.map((item, index) => {
                                <MenuListItem key={index} item={item} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuList
