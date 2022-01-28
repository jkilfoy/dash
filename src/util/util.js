export const GRAVITY = 0.15;
export const JUMP_VELOCITY = -6;

export const clip = (x, min, max) => {
    return  x < min ? min 
        : x > max ? max 
        : x;
}

export const makeVector = ([x, setX], [y, setY]) => {
    return {
        x: x, y: y,
        setX: setX,
        setY: setY
    }
}