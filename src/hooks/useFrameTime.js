import React, {useState, useEffect} from 'react';

/**
 * A custom hook to implement a game loop. frameTime is updated every 1/60 of a second.
 * 
 * retrieved from: https://medium.com/projector-hq/writing-a-run-loop-in-javascript-react-9605f74174b
 * @returns 
 */
export const useFrameTime = () => {
    const [frameTime, setFrameTime] = useState(performance.now());
    useEffect(() => {
        let frameId;
        const frame = (time) => {
            setFrameTime(time);
            frameId = requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
        return () => cancelAnimationFrame(frameId);
    }, []);
    return frameTime;
};