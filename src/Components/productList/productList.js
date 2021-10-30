import React, { Component } from 'react'
import Product from '../product/product'
import './sass/products.css'
import { Route } from 'react-router-dom'


class TaskList extends Component {
    render() {
    const products = this.props.products
    const productsList = products.map(e => {
        return (
            <Product key={e.id} key2={e.id} name={e.name} complete={e.complete} methodDel={this.props.methodDel} methodComplete={this.props.methodComplete}/>
        )
    })
    let productsActive = productsList.filter(e => e.props.complete === false)
    let productsComplete = productsList.filter(e => e.props.complete === true)

    let ProductsActives = () => {
        return (productsActive)
    }
    let ProductsCompletes = () => {
        return (productsComplete)
    }
    let ProductsLists = () => {
        return (productsList)
    }
    return (
        <div className='bottom'>
            <div className='productsList'>
                <ul>
                    <section>
                        <Route exact path='/' component={ProductsLists}/>
                        <Route path='/complete' component={ProductsCompletes}/>
                        <Route path='/active' component={ProductsActives}/>
                    </section>
                </ul>
            </div>
        </div>
    )
}}
export default TaskList;