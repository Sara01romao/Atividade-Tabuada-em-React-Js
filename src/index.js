import React from 'react';
import ReactDOM from 'react-dom';


var n = parseInt(prompt("Informe um número", "5"));
var elemento = (
    <div>
        <h1>Tabuada do número {n}</h1>
        <h3>1 X {n} = {1*n}</h3>
        <h3>2 X {n} = {2*n}</h3>
        <h3>3 X {n} = {3*n}</h3>
        <h3>4 X {n} = {4*n}</h3>
        <h3>5 X {n} = {5*n}</h3>
        <h3>6 X {n} = {6*n}</h3>
        <h3>7 X {n} = {7*n}</h3>
        <h3>8 X {n} = {8*n}</h3>
        <h3>9 X {n} = {9*n}</h3>
        <h3>10 X {n} = {10*n}</h3>

    </div>
);


ReactDOM.render(elemento, document.getElementById('root')
);