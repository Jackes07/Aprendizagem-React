//extrai um componente ListItem, você deve deixar a chave nos elementos 
//<ListItem /> ao invés de deixar no elemento <li> dentro de ListItem.
import React from 'react'

function ListItem(props){
    return <li>{props.value}</li>
}

function NumberList(props){
    const numbers = props.numbers
    const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number}/>
    );
    return (
        <ul>
            {listItems}
        </ul>
    )
}

function ForExport(){
   return <NumberList numbers={[1,2,3,4,5]}/>
}

export default ForExport