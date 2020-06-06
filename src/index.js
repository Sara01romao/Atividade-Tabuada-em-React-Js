import React from 'react';
import ReactDOM from 'react-dom';
import Tabuada from "./Tabuada";



var n = parseInt(prompt("Informe um número", "5"));

ReactDOM.render(< Tabuada numero={n}/>, document.getElementById('root')
);
