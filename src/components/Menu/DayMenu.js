import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import AddProductForm from './AddProductForm'
import EditDescriptionForm from './EditDescriptionForm'
import { useStoreActions, useStoreState } from 'easy-peasy'

const DayMenu = () => {
    const { id } = useParams();

    const { fetchDayById } = useStoreActions((actions) => actions.calendarModel);
    const { fetchProducts } = useStoreActions((actions) => actions.productModel);
    const { fetchSymptoms } = useStoreActions((actions) => actions.symptomModel);

    const { dayById, updateDayById, status, loading, products, symptoms } = useStoreState(state => ({

        updateDayById: state.calendarModel.updateDayById,
        dayById: state.calendarModel.dayById,
        status: state.calendarModel.status,
        loading: state.calendarModel.loading,

        products: state.productModel.products,
        symptoms: state.symptomModel.symptoms,
    }));

    useEffect(() => {
        if (id) {
            fetchDayById(id);
        }
    }, [id])

    useEffect(() => {
        if (id) {
            fetchProducts();
            fetchSymptoms();
        }
    }, [id])

    return (
        <section className='day-menu'>
            <div className='day-menu__outer'>
                <div className='container'>
                    <div className='day-menu__inner'>
                        <div className='day-menu__block'>
                            {
                                dayById && dayById.products((product) => {
                                    <ProductItem key={product.id} item={product}
                                        status={status} loading={loading} />
                                })
                            }
                            <AddProductForm id={id} products={products}
                                updateDayById={updateDayById} status={status} loading={loading} />
                        </div>
                        <div className='day-menu__block'>
                            {
                                dayById && dayById.symptoms((symptom) => {
                                    <ProductItem key={symptom.id} item={symptom}
                                        status={status} loading={loading} />
                                })
                            }
                            <AddSymptomForm id={id} symptoms={symptoms}
                                updateDayById={updateDayById} status={status} loading={loading} />
                        </div>
                        <div className='day-menu__block'>
                            <EditDescriptionForm id={id} updateDayById={updateDayById}
                                status={status} loading={loading} description={dayById.description} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DayMenu
