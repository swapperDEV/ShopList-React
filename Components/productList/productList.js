import React, { Component } from 'react'
import Product from '../product/product'
import './sass/products.css'

class TaskList extends Component {
    render() {
    const products = this.props.products
    const which = this.props.which
    const productsList = products.map(e => {
        return (
            <Product key={e.id} key2={e.id} name={e.name} complete={e.complete} methodDel={this.props.methodDel} methodComplete={this.props.methodComplete}/>
        )
    })
    let productsActive = productsList.filter(e => e.props.complete === false)
    let productsComplete = productsList.filter(e => e.props.complete === true)
    return (
        <div className='bottom'>
            <div className='productsList'>
                <ul>
                    {which === 'all' ? productsList : null}
                    {which === 'active' ? productsActive : null}
                    {which === 'complete' ? productsComplete : null}
                </ul>
            </div>
        </div>
    )
}}
export default TaskList;