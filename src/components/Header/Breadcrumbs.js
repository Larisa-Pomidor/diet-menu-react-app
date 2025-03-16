import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Breadcrumbs.css'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ path }) => {
    return (
        <div className='breadcrumbs'>
            <Link to={path} className='breadcrumbs__inner'>
                <FontAwesomeIcon icon={faBackward} /> Back
            </Link>
        </div>
    )
}

export default Breadcrumbs
