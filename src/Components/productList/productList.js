import React from 'react'
import Product from '../product/product'
import './sass/products.css'

const TaskList = (props) => {
    const products = props.products
    const productsList = products.map(e => {
        return (
            <Product key={e.id} key2={e.id} name={e.name} complete={e.complete} methodDel={props.methodDel} methodComplete={props.methodComplete}/>
        )
    })
    return (
        <div className='productsList'>
            <ul>
                {productsList}
            </ul>
        </div>
    )
}
export default TaskList;