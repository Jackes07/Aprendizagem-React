import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './estudoDeCaso/clock';
import WorkEvents from './estudoDeCaso/trabalhandoComEventos';
import renderCondi from './estudoDeCaso/renderCondicional';
import Greeting from './estudoDeCaso/renderCondicional';
import LoginControl from './estudoDeCaso/renderCondicional';


    ReactDOM.render(
        //Estou passando o objeto a ser rendenrizado e onde ele vai ser renderizado
        //Esse Clock é uma função que eu passei que estou usando ele como um elemento do react
        <LoginControl/>,
        document.getElementById('root')
    );
