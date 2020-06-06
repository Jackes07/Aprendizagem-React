/*Se algum outro módulo não for carregado (por exemplo, devido a uma falha na conexão), será disparado um erro. Você pode manusear 
estes erros para mostrar uma ótima experiência de usuário e 
gerenciar a recuperação através de Error Boundaries.*/

import React, {Suspense} from 'react'
import MyErroBoundary from './MyErrorBoundary' //--Lugar de implementação do erro que eu farei

const OtherComponent = React.lazy(() => import('./OtherComponent'))
const AnotherComponent = React.lazy(() => import('.AnotherComponent'))

const MyComponent = () => (
    <div>
        <MyErroBoundary>
            <Suspense fallback={<div>Loading...</div>}>
            <section>
                <OtherComponent/>
                <AnotherComponent/>
            </section>
            </Suspense>
        </MyErroBoundary>
    </div>
)

