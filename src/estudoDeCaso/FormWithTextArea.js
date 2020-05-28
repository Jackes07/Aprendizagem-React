import React from 'react'

class EasyForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM...'}
        
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        if(this.state.value.startsWith('Por favor,')){
            alert('WRONG!!, Digite algo')
        }
        else{
            alert('Um dissertação: ' + this.state.value)
        }
        
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Dissertação:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}

export default EasyForm