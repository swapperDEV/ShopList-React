import React from 'react'


class Product extends React.Component {
    handleDelete = () => {
        this.props.methodDel(this.props.key2)
    }
    changeComplete = () => {
        this.props.methodComplete(this.props.key2)
    }
    render () {
    return (
            <li className={this.props.complete ? 'complete' : null}>
                <b>{this.props.name}</b>
                <div className='trash'>
                <i className="fas fa-check-circle" onClick={this.changeComplete}></i>
                <i className="far fa-trash-alt" onClick={this.handleDelete}></i>
                </div>
            </li>
    )
}}
export default Product