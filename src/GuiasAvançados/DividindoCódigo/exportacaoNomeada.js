/*
React.lazy atualmente suporta apenas export default. 
Se o módulo que você deseja importar usa exportações nomeadas,
você pode criar um módulo intermediário que usa export default. 
*/

//export const MyComponent = /*...*/
//export const MyUnusedComponent = /*...*/

/*Como vai extar no meu componente */
//export {MyComponent as default} from "./ManyComponents.js"

/*Como importar*/
import React, {lazy} from 'react'
const MyComponent = lazy(() => import("./MyComponent.js"))