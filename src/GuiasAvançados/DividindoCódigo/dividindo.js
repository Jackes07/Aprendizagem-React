//Em webPack --Quando o Webpack encontra esta sintaxe,
//automaticamente ele divide o código de sua aplicação.

import {add} from './mathExemplo'
console.log(add(16, 26))


import ("./math").then(math => {
    console.log(math.add(16, 26))
})

//React.lazy --- A função do React.lazy é permitir a você renderizar
//uma importação dinâmica como se fosse um componente comum.

//Antes
import OtherComponent from './otherComponent'

//Depois
const OtherComponent = React.lazy(() => ('./OtherComponent'))

//Isto automaticamente carregará o pacote contendo o OtherComponent 
//quando este componente é renderizado pela primeira vez.