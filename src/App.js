import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const App = () => {
    return (
        <div>
            <h1>Default App</h1>
            <Button />
        </div>
    ) 
}

ReactDOM.render( < App /> , document.getElementById('root'));