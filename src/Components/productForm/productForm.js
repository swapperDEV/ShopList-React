import React, { Component } from 'react';

class ProductForm extends Component {
  state = {
    productInput: '',
    complete: false,
  }
  inputForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSend = () => {
    this.props.method(this.state.productInput, this.state.complete)
  }
  render() {
    return (
      <React.Fragment>
          <div className='center'>
            <div className="form">
                    <input onChange={this.inputForm} placeholder='Input product...'  maxLength='22' className='nameOfProduct' name="productInput" value={this.state.productInput}/>
                    <button onClick={this.handleSend} className='addProduct'>Add product</button>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default ProductForm
