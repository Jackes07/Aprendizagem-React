import React from 'react'
/*
class EntradaDeTexto extends React.Component{
    constructor(props){
        super(props)
        //Criar uma referência do teclado para um elemento
        this.inputDeTexto = React.createRef()
    }

    render(){
        return(
            <input
                type="text"
                ref={this.inputDeTexto}
            />
        )
    }
}
*/

//Passando com referência de um componente pai para o filho

function EntradaDeTexto(props){
    return(
        <div>
            <input ref={props.inputRef}/>
        </div>
    )
}

class ComponentePai extends React.Component{
    constructor(props){
        super(props)
        this.inputElement = React.createRef();
    }

    render(){
        return(
            <EntradaDeTexto inputRef = {this.inputElement}/>
        )
    }
}

//Agora posso definir o foco quando necessário
this.inputElement.current.focus();