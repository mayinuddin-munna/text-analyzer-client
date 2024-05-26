import './App.css';
import TextEditor from './components/TextEditor.tsx';
import BottomContainer from './components/BottomContainer.tsx';
import React from 'react';
import Counter from './components/Counter.tsx';

function App() {
    return (
        <div className="App">
            <h2>Text Detector</h2>
            <Counter />
            <TextEditor />
            <BottomContainer />
        </div>
    );
}

export default App;
