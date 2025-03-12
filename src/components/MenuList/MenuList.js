import React, { useEffect } from 'react'
import MenuListItem from './MenuListItem';

const MenuList = () => {

    const { fetchDays } = useStoreActions((actions) => actions.calendarModel);

    const { menuList } = useStoreState(state => ({

        menuList: state.calendarModel.menuList
    }));

    useEffect(() => {
        fetchDays();
    }, [])

    return (
        <section className='menu-list'>
            <div className='menu-list__outer'>
                <div className='container'>
                    <div className='menu-list__inner'>
                        {
                            menuList && menuList.map((item, index) => {
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
