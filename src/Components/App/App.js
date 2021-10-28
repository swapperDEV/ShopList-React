import React, { Component } from 'react';
import ProductForm from '../productForm/productForm'
import ProductList from '../productList/productList'
import './sass/style.css'

class App extends Component {
  state = {
    products: [],
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
        for (let s of search) {
          console.log(s)
        }
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
      console.log(allList)
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
    console.log(textToSave)
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
  render() {
    return (
      <React.Fragment>
          <div className='app'>
            <div className='top'>
              <h1 className='h1'>ShopList <i className="fas fa-shopping-basket"></i></h1>
            </div>
            <div className='center'>
              <ProductForm method={this.addNewProduct}/>
            </div>
            <div className='bottom'>
              <ProductList products={this.state.products} methodDel={this.deleteProduct} methodComplete={this.completeProduct}/>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default App;
