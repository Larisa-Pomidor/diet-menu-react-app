import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import AddProductForm from './AddProductForm'
import EditDescriptionForm from './EditDescriptionForm'

const DayMenu = (id) => {

    const day = {}

    useEffect(() => {

    }, [id])

    return (
        <section className='day-menu'>
            <div className='day-menu__outer'>
                <div className='container'>
                    <div className='day-menu__inner'>
                        <div className='day-menu__block'>
                            {
                                day.products((product) => {
                                    <ProductItem item={product} />
                                })
                            }
                            <AddProductForm />
                        </div>
                        <div className='day-menu__block'>
                            {
                                day.symptoms((product) => {
                                    <ProductItem item={product} />
                                })
                            }
                            <AddProductForm />
                        </div>
                        <div className='day-menu__block'>
                            <EditDescriptionForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DayMenu
