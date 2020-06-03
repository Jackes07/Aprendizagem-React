import React from 'react'

function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
        )
}

function WelcomeDialog(){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Bem vindo
            </h1>
            <p className="Dialog-Message">
                Obrigado por visitar a nossa espaçonave
            </p>
        </FancyBorder>
    )
}

export default WelcomeDialog