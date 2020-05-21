import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './estudoDeCaso/clock';
import WorkEvents from './estudoDeCaso/trabalhandoComEventos';
import renderCondi from './estudoDeCaso/renderCondicional';
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
    ReactDOM.render(
        //Estou passando o objeto a ser rendenrizado e onde ele vai ser renderizado
        //Esse Clock é uma função que eu passei que estou usando ele como um elemento do react
        <renderCondi />,
        document.getElementById('root')
    );
