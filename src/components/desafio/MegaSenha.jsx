import './MegaSenha.css'
import React from 'react'

function fillArray(array = Array(6).fill(0)) {
    const newNumber = parseInt(Math.random() * 60 + 1);
    return (array.indexOf(newNumber) !== -1 ?
        fillArray(array) : newNumber)
    return (array.includes(newNumber) ?
        fillArray() : newNumber)
}

export default class MegaSenha extends React.Component {

    state = {
        numbers: Array(6)
            .fill(0)
            .reduce(a => [...a, fillArray(a)], [])
            .join(' - '),
        btnDisabled: false,
        text: 'Gerar Novos Números'
    }

    generateNumbers = () => {
        const newArray = Array(6)
            .fill(0)
            .reduce(a => [...a, fillArray(a)], [])
            .sort((a, b) => a - b)
            .join(' - ')
        this.setState({
            numbers: newArray
        })
        // this.setState({
        //     btnDisabled: true,
        //     text: 'Favor, esperar'
        // })
        // setTimeout(() => {
        //     this.setState({
        //         btnDisabled: false,
        //         text: 'Gerar Novos Números'
        //     })
        // }, 3000)
    }

    render() {
        return (
            <div className='MegaSenha'>
                <h2>Números da Mega Senha</h2>
                <p>{this.state.numbers}</p>
                <div>
                    <button onClick={
                        this.generateNumbers
                    } disabled={this.state.btnDisabled}>{this.state.text}</button>
                </div>
            </div>
        )
    }
}
