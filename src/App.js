import './App.css';
import TextField from './components/TextField.tsx';
import BottomCounter from './components/BottomCounter.tsx';
import React from 'react';
import Counter from './components/Counter.tsx';

function App() {
    return (
        <div className="App">
            <h2>Text Detector</h2>
            <Counter />
            <TextField />
            <BottomCounter />
        </div>
    );
}

export default App;
