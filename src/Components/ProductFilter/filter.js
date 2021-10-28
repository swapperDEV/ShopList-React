import React from 'react'

const ProductFilters = (props) => {
    const { method } = props
    const exportFilter = (exp) => {
        method(exp)
    }
    return (
        <>
            <div className='footer'>
                <div className='all' onClick={() => exportFilter('all')}>All</div>
                <div onClick={() => exportFilter('complete')}>Complete</div>
                <div onClick={() => exportFilter('active')} className='active'>Active</div>
            </div>
        </>
    )
}

export default ProductFilters;