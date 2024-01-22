
export default class HTMLObject extends HTMLElement{
    constructor(){
        super();

    }
    set position(pos){
        this.style.position = pos;
    }
    set x(nx){
        this.style.left = `${nx}px`;
    }
    set y(ny){
        this.style.top = `${ny}px`;
    }
    set width(nw){
        this.style.width = `${nw}px`;
    }
    set height(nh){
        this.style.height = `${nh}px`;
    }
    
    setStyle(attr, value){
        this.style.setProperty(attr, value);
    }
    
    update(dt){

    }
}

customElements.define('game-el', HTMLObject);