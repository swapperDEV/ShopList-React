import React from 'react'
import { Link } from 'react-router-dom'

const ProductFilters = (props) => {
    const { method } = props
    const exportFilter = (exp) => {
        method(exp)
    }
    return (
        <>
            <div className='footer'>
                <div className='all' onClick={() => exportFilter('all')}><Link to='/'>All</Link></div>
                <div onClick={() => exportFilter('complete')}><Link to='/complete'>Complete</Link></div>
                <div onClick={() => exportFilter('active')} className='active'><Link to='/active'>Active</Link></div>
            </div>
        </>
    )
}

export default ProductFilters;