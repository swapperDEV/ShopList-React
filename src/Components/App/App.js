import React, { Component } from 'react';
import ProductForm from '../productForm/productForm'
import ProductList from '../productList/productList'
import './sass/style.css'
import MainContener from './ui/appContener';
import ProductFilter from '../ProductFilter/filter';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  state = {
    products: [],
    viewProducts: 'all'
  }

  componentDidMount = () => {
    let allList = []
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", "")
    } 
      let listFromSave = localStorage.getItem("list")
      listFromSave = listFromSave.split(',')
      listFromSave.forEach(e => {
        let string = e
        let search = new URLSearchParams(string)
        let completes = search.get('com')
        if(completes === 'false') {
          completes = false
        } else {
          completes = true
        }
        let newObj = {
          id: search.get('id'),
          name: search.get('nam'),
          complete: completes
        }
        if(newObj.name != null) {
          allList.push(newObj)
        }
      })
      this.setState({
        products: allList
      })
      

  }
  componentDidUpdate = () => {
    let textToSave = ''
    let products = this.state.products
    products.forEach(e => {
      textToSave+= '&id=' + e.id + '&nam=' + e.name + '&com='+ e.complete + '&,'
    })
    localStorage.setItem('list', textToSave)
  }
  addNewProduct = (name, complete) => {
    if(name.length > 0) {
    const newProduct = {
      id: this.state.products.length+1,
      name: name,
      complete: complete
    }
    let allProduct = this.state.products
    allProduct.push(newProduct)
    this.setState({
      products: allProduct
    })
  }}
  deleteProduct = (key) => {
    let allProduct = this.state.products
    let deleteProduct = allProduct.findIndex(e => e.id === key)
    allProduct.splice(deleteProduct, 1) 
    this.setState({
      products: allProduct
    })
  }
  completeProduct = (key) => {
    let allProduct = this.state.products
    allProduct.map((e) => {
      if(e.id === key) {
        e.complete = !e.complete
      }
      return 0
    })
    this.setState({
      products: allProduct
    })
  }
  viewProduct = (view) => {
    this.setState({
      viewProducts: view
    })
  }
  render() {
    return (
      <Router>
        <React.Fragment>
            <div className='app'>
                <MainContener classInput='top'/>
                <ProductForm method={this.addNewProduct}/>
                <ProductList products={this.state.products} methodDel={this.deleteProduct} methodComplete={this.completeProduct} which={this.state.viewProducts}/>
                <ProductFilter method={this.viewProduct}/>
            </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
