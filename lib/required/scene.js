
export default class Scene{
    constructor(layer_num){
        this.gameobjects = [];
        this.layer_num = layer_num;
        this.layers = []
        this.game_container = document.getElementById('game-container');
        this.createLayers(layer_num);
    }
    getLayerContext(layer){
        return this.layers[layer].context;
    }
    getLayer(layer){
        return this.layers[layer].canvas;
    }
    createLayers(num){
        for (let i = 0; i < num; i++) {
            const layer = document.createElement('canvas');
            const ctx = layer.getContext('2d');
            layer.style.zIndex = i;
            layer.classList.add('game-frame');
            layer.id = `layer-${i}`;
            this.game_container.appendChild(layer);
            this.layers.push({"canvas": layer, "context": ctx});
        }
    }
    resizeLayers(w, h){
        this.layers.forEach(element => {
            element.canvas.width = w;
            element.canvas.height = h;
        });
    }
}