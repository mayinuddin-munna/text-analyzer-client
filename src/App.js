import './App.css';
import React from 'react';
import TextField from './components/TextField.tsx';
import BottomCounter from './components/BottomCounter.tsx';
import TopCounter from './components/TopCounter.tsx';

function App() {
    return (
        <div className="App">
            <h2>Text Detector</h2>
            <TopCounter />
            <TextField />
            <BottomCounter />
        </div>
    );
}

export default App;
