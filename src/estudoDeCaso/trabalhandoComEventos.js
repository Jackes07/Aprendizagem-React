import React from 'react';
import ReactDOM from 'react-dom';
//Eventos em React são nomeados usando camelCase ao invés de letras minúsculas.
//Com o JSX você passa uma função como manipulador de eventos ao invés de um texto.

//Exemplo: <button onClick={activateLasers}> Ativar Lasers </button>

/*
Como evitar o comportamento default(padrão no react)

function ActionLink() {
            function handleClick(e) {
              e.preventDefault();
              console.log('O link foi clicado.');
            }
          
            return (
              <a href="#" onClick={handleClick}>
                Clique Aqui
              </a>
            );
          }

*/

//Na função Bind você passa os parâmetros de um função com um this de outra função que você mandou executar
//This is hard Broo!

class WorkEvents extends React.Component {
  /*
  constructor(props){
        super(props)
        this.state = {isWorkEventsOn : true}
   
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(state => ({
            isWorkEventsOn: !state.isWorkEventsOn
        }))
    }
    //<button onClick={(e) => this.deleteRow(id, e)}>Deletar linha</button>
    render() {
            return(
            <div>
            <button onClick={this.handleClick}> {this.state.isWorkEventsOn? 'ON' : 'OFF'}</button>
        
              
            </div>
            )        
        }*/
        handleClick() {
          console.log('this is:', this);
        }
      
        render() {
          // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
          return (
            <button onClick={() => this.handleClick()} >
              Click me
            </button>
          );
        }

    }


export default WorkEvents;