

export function lerp( a, b, alpha ) {
    return (a + alpha * ( b - a ));
}

export function easeIn(t){
    return t * t
}

export function flip(x){
    return 1 - x;
}

export function easeOut(t){
    return flip(Math.pow(flip(t), 2))
}

export function easeInOut(t){
    return lerp(easeIn(t), easeOut(t), t);
}