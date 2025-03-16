import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import AddProductForm from './AddProductForm'
import AddSymptomForm from './AddSymptomForm'
import EditDescriptionForm from './EditDescriptionForm'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useParams } from 'react-router-dom'
import SymptomItem from './SymptomItem'
import './DayMenu.css'
import Breadcrumbs from '../Header/Breadcrumbs'

const DayMenu = () => {
    const { id } = useParams();

    const { fetchDayById } = useStoreActions((actions) => actions.calendarModel);
    const { fetchProducts } = useStoreActions((actions) => actions.productModel);
    const { fetchSymptoms } = useStoreActions((actions) => actions.symptomModel);

    const { addDaySymptom } = useStoreActions((actions) => actions.calendarModel);
    const { addDayProduct } = useStoreActions((actions) => actions.calendarModel);
    const { updateDayById } = useStoreActions((actions) => actions.calendarModel);

    const { dayById, status, loading, products, symptoms } = useStoreState(state => ({

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
    }, [id, fetchDayById])

    useEffect(() => {
        if (id) {
            fetchProducts();
            fetchSymptoms();
        }
    }, [id, fetchSymptoms, fetchProducts])

    return (
        <section className='day-menu'>
            <div className='day-menu__outer'>
                <Breadcrumbs path='/calendar' />
                <div className='container'>
                    {dayById &&
                        <div className='day-menu__inner'>
                            <div className='day-menu__block'>

                                {console.log(dayById)}
                                {
                                    dayById.products.length > 0
                                        ?
                                        dayById.products.map((product, index) =>
                                            <ProductItem key={index} item={product} dayId={dayById.id}
                                                status={status} loading={loading} />
                                        )
                                        :
                                        <div className='day-menu__no-content'>
                                            No Products Yet
                                        </div>
                                }
                                <AddProductForm id={id} products={products}
                                    addDayData={addDayProduct} status={status} loading={loading} />
                            </div>
                            <div className='day-menu__block'>
                                {
                                    dayById.symptoms.length > 0
                                        ?
                                        dayById.symptoms.map((symptom, index) =>
                                            <SymptomItem key={index} item={symptom} dayId={dayById.id}
                                                status={status} loading={loading} />
                                        )
                                        :
                                        <div className='day-menu__no-content'>
                                            No Symptoms Yet
                                        </div>
                                }
                                <AddSymptomForm id={id} symptoms={symptoms}
                                    addDayData={addDaySymptom} status={status} loading={loading} />
                            </div>
                            <div className='day-menu__type'>
                                {dayById.type}
                            </div>
                            <div className='day-menu__block'>
                                {
                                    <EditDescriptionForm id={id} updateDayById={updateDayById}
                                        status={status} loading={loading} note={dayById.note} />
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default DayMenu
