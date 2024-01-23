
export default class Scene{
    constructor(layer_num){
        this.gameobjects = [];
        this.layer_num = layer_num;
        this.layers = []
        this.game_container = document.getElementById('game-container');
        this.createLayers(layer_num);
    }
    createLayers(num){
        for (let i = 0; i < num; i++) {
            const layer = document.createElement('canvas');
            layer.style.zIndex = i;
            layer.classList.add('game-frame');
            layer.id = `layer-${i}`;
            this.game_container.appendChild(layer);
            this.layers.push(layer);
        }
    }
    resizeLayers(w, h){
        this.layers.forEach(element => {
            element.width = w;
            element.height = h;
        });
    }
}