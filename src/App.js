import React from 'react';
/*
// O componente React aceita apenas uma div dentro dele
//Se colocar duas dá erro, por padrão tem a abertura de parênteses e 
// É obrigado a importar o react para a aplicação
--Componente Funcional--
function App() {
  return (
    <div>
       hello world!
    </div>
  )
}
*/
/*
//Outra forma de fazer um componente
class App extends React.Component {
    render() {
    return (
      <div>
        hello World 
      </div>
    )
  }
}
*/
/*
class App extends React.Component {
  //Possibilidades de se fazer um componente
  state = {
    numero1 : null,
    numero2 : null,
    resultado: null
    }

    somar = () => {
      const resultado = parseInt(this.state.numero1) + parseInt(this.state.numero2)
      this.setState({resultado: resultado})
    }

  render() {
    return (
      //Referenciando a variavel nome
      //Estou fazendo de tal forma que a medida que outro evento input ocorra é para atualizar a variável nome também
      <div>
        <label>Primeiro:</label>
        <input type = "text" value = {this.state.numero1} onChange = {(e) => this.setState({numero1: e.target.value})}/><br/>
        
        <label>Segundo:</label>
        <input type = "text" value = {this.state.numero2} onChange = {(e) => this.setState({numero2: e.target.value})}/><br/>

        <button 
          onClick={this.somar}>
            Somar
        </button><br/>

        O resultado é: {this.state.resultado}
      </div>
    )
  }
}
*/

import 'bootswatch/dist/flatly/bootstrap.css'

export default App;
