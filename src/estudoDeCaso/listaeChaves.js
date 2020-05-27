import React from 'react';
import ReactDOM from 'react-dom';

 /*   const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>);*/

    function ListNumbers(prop) {
        const { numbers } = prop;
        return <ul>{numbers.map(number => <li key={number.toString()}>{number}</li>)}</ul>}
      
      function ListKey() {
        return <ListNumbers numbers={[1,2,3,4,5]}/>
      }
      
      export default ListKey
