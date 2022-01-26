import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import React, {useEffect, useRef} from 'react';

function App() {

    const playerRef = useRef();

    const componentsToUpdate = [playerRef];

    function update() {
        componentsToUpdate.map(component => component.current.update());

        this.animationID = window.requestAnimationFrame(() => this.update());
    }

    return (
        <Player ref={playerRef}></Player>
    );
}

export default App;


