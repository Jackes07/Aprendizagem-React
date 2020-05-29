import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './estudoDeCaso/clock';
import WorkEvents from './estudoDeCaso/trabalhandoComEventos';
import renderCondi from './estudoDeCaso/renderCondicional';
import Greeting from './estudoDeCaso/renderCondicional';
import LoginControl from './estudoDeCaso/renderCondicional';
import ListKey from './estudoDeCaso/listaeChaves';
import ForExport from './estudoDeCaso/extraindoComponentWithKeys';
import ForExportElemKeys from './estudoDeCaso/chavesUnicasElementosIrmaos';
import NameForm from './estudoDeCaso/FormsTest';
import EasyForm from './estudoDeCaso/FormWithTextArea';
import FlavorForm from './estudoDeCaso/FormSelect';
import Reservation from './estudoDeCaso/ManipulandoMultiplosInputs';
import Calculator from './estudoDeCaso/calculadoraDeTemperatura'

//STATE PODE SER ALTERADO DENTRO DE UM OBJETO POR UM USUÁRIO, MAS PROPS NÃO!!


    ReactDOM.render(
        //Estou passando o objeto a ser rendenrizado e onde ele vai ser renderizado
        //Esse Clock é uma função que eu passei que estou usando ele como um elemento do react
       
        <Calculator />,
        document.getElementById('root')
    );
