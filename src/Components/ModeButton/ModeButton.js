import React, { Component } from 'react'
import './mode.css'

class ModeButton extends Component {
    state = {
        darkmode: true,
        classes: 'far fa-moon changer',
        classesLight: 'far fa-moon changer',
        classesDark: 'far fa-sun changer'
    }
    changeMode() {
        this.setState({
            darkmode: !this.state.darkmode
        })
        if(this.state.darkmode === true) {
            document.body.setAttribute('data-theme', 'dark')
            this.setState({
                classes: this.state.classesDark
            })
        } else {
            document.body.setAttribute('data-theme', 'light')
            this.setState({
                classes: this.state.classesLight
            })
        }
    }
    render() {
    return (
        <>
            <div className='switchs' onClick={this.changeMode.bind(this)}>
             <i className={this.state.classes}></i>
            </div>
        </>
    )   
}}

export default ModeButton
