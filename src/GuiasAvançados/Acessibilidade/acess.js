/*
Às vezes, quebramos a semântica de HTML 
quando adicionamos elementos <div> ao 
nosso JSX somente para fazer nosso código 
React funcionar, especialmente ao trabalhar 
com listas (<ol>, <ul> e <dl>) e HTML <table>. 
Nesses casos, devemos usar React 
Fragments para agrupar vários elementos.
*/

import React, {Fragment} from 'react'

function ListaDeItems({item}){
    return(
        <Fragment>
            <dt>{item.nome}</dt>
            <dd>{item.descricao}</dd>
        </Fragment>
    )
}


function Glossario(props){
    const ca = [{id: 1, nome: "joao", descricao: "aoskdoaskd"},
     {id:2, nome:"pedro", descricao:"saldkfçasld"}]
    return(
        <dl>
            {props.items.map(item =>(
                <ListaDeItems item={item} key={item.id}/>
            ))}
        </dl>
    )
}



/*
function Glossario(props) {

    return (
      <dl>
        {props.items.map(item => (
          // Fragments também aceitam `key`(chave) prop quando estao mapeando coleções
          <Fragment  key={item.id}>
            <dt>{item.nome}</dt>
            <dd>{item.descricao}</dd>
          </Fragment>
        ))}
      </dl>
    );
  }
*/

export default Glossario