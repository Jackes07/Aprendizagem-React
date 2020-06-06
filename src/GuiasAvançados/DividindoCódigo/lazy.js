import React, {Suspense} from 'react'

const OtherComponent = React.lazy(() => import('./OtherComponent'))
/*
A função do React.lazy é permitir a você renderizar uma importação
 dinâmica como se fosse um componente comum
*/


/*
*--O componente lazy pode ser renderizado dentro de um componente Suspense, o que no permite mostrar
 algum conteúdo de fallback (como um indicador de carregamento) 
enquanto aguardamos o carregamento do componente lazy.
*--fallback aceita qualquer elemento React que você deseja renderizar 
enquanto se espera o componente ser carregado.
*/

function MyComponente(){
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent/>
            </Suspense>
        </div>
    )
}

/*
Você pode colocar o componente Suspense em qualquer lugar acima do componente dinâmico. Você pode até mesmo ter vá
 componentes dinâmicos envolvidos em um único componente Suspense.
*/
function MyComponent(){
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
            <section>
                <OtherComponent/>
                <AnotherComponent/>
            </section>
            </Suspense>
        </div>
    )
}