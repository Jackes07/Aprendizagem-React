import React from 'react'

//Elevando o state, quando precisa de uma variável em mais de um componente 
// Precisa encontrar o elemento Pai de ambos os componentes e colocar o state nele
//E passar ele como props para os componentes filhos, para que os filhos leia o props
// E passe o state de como ele deseja e necessita, diminuindo assim o risco de erros 
// Porém, demanda mais código

function EstaOuNaoFervendo(props){
    if(props.celsius >= 100){
        return <p>A água ferveria.</p>
    }
    return <p>A água não ferveria</p>
}

function toCelsius(fahrenheit){
    return(fahrenheit - 32) * 5/9
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5) +32
}

function tryConvert(temperatura, convert){
    const input = parseFloat(temperatura)
    if(Number.isNaN(input)){
        return ''
    }

    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()

}

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {temperatura: ' ', scale: 'c'}
    }

    handleCelsiusChange(temperatura){
        this.setState({scale: 'c', temperatura})
    }

    handleFahrenheitChange(temperatura){
        this.setState({scale: 'f', temperatura})
    }

    render(){
        const scale = this.state.scale
        const temperatura = this.state.temperatura
        const celsius = scale === 'f' ? tryConvert (temperatura, toCelsius) : temperatura
        const fahrenheit = scale === 'c' ? tryConvert (temperatura, toFahrenheit) : temperatura

        return(
            <div>
                <TemperaturaInput scale="c" temperatura={celsius} onTemperaturaChange={this.handleCelsiusChange}/>
                <TemperaturaInput scale="f" temperatura={fahrenheit} onTemperaturaChange={this.handleFahrenheitChange}/>
                <EstaOuNaoFervendo celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

//----------------------------------------------------------------------------//

const scaleNames={
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperaturaInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
       // this.setState({temperatura: e.traget.value})
       this.props.onTemperaturaChange(e.target.value)
    }

    render(){
        const temperatura = this.props.temperatura
        const scale = this.props.scale
        return(
            <fieldset>
                <legend>Informe a temperatura em {scaleNames[scale]}:</legend>
                <input value={temperatura} onChange={this.handleChange}/>
            </fieldset>
        )
    }

}

export default Calculator;