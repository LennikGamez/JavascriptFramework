
import {lerp} from "../functions/easingfunctions.js";


export default class Tween{
    constructor(startValue, endValue, durration, easefunction, tick=100){
        this.time = 0;
        this.value = startValue;
        this.startValue = startValue;
        this.endValue = endValue;
        this.durration = durration;
        this.easefunction = easefunction;
        this.tick = tick;
    }

    start(dt){
        if(this.time <= this.durration){
            this.value = lerp(this.startValue, this.endValue, this.easefunction(this.time/this.durration));
            this.time += this.tick * dt;
        }
        return this.value;
    }
}



