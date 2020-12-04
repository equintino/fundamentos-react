import './Contador.css'
import React, { Component } from 'react'

import FormInput from './FormInput'
import Button from './Button'
import Display from './Display'

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Contador</h3>

                <FormInput passo={this.state.passo} setPasso={this.setPasso}></FormInput>

                <Display label='Valor' valor={this.state.valor}></Display>

                <Button onInc={this.inc} onDec={this.dec}></Button>
            </div>
        )
    }
}