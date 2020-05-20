import React from 'react';
import ReactDOM from 'react-dom';
//React é para single page aplication, também transforma JS em navegadores
/*
function Clock(props) {
    return(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
    }
    function tick() {
    ReactDOM.render(
        //Estou passando o objeto a ser rendenrizado e onde ele vai ser renderizado
        //Esse Clock é uma função que eu passei que estou usando ele como um elemento do react
        <Clock date={new Date()}/>,
        document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);
----------------------------*/
//-----------------------------Maneira Ideal----------------------

//State é privado e totalmente controlado pelo componente é
//Tipo para atualizar e guarda as novas informações do componente

class Clock extends React.Component {
   //Fazer o construtor para cetar as informações no objeto e possibilitar novas
    //Componentes de classes devem sempre chamar o construtor com props.
   constructor(props){
       super(props);
       this.state = {date: new Date()}
   }
   //É importante configurar quando o objeto e renderizado pela primeira vez
   //Mounting
   //O método componentDidMount() é executado depois que a saída do componente é renderizada no DOM
   //Estou começando o temporizador
   componentDidMount(){
    this.timerID = setInterval(() => 
        this.tick(), 1000);
   }

   //E também é importante limpar quando o elemento for removido
   //ummounting
   //Estou limpando o temporizador
   componentWillUnmount(){
    clearInterval(this.timerID)
   }

   //Não mudar o setState manualmente, e o único lugar possível atribuir this.state é o construtor
   //State pode funcionar assincronamente, por isso não se deve confiar no this.props e this.state
   //Um pode estar fazendo algo e o outro outra, dando erro no código 
   tick(){
       this.setState({
           date: new Date()
       });
   }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  //O state pode passar as informações presente neles do elemento pai para o filho

  //todos os componentes estão isolados
  function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }

    ReactDOM.render(
        //Estou passando o objeto a ser rendenrizado e onde ele vai ser renderizado
        //Esse Clock é uma função que eu passei que estou usando ele como um elemento do react
        <App />,
        document.getElementById('root')
    );
