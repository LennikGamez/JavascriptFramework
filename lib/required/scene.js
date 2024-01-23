
export default class Scene{
    constructor(layer_num){
        this.gameobjects = [];
        this.layer_num = layer_num;
        this.layers = createLayers(layer_num);
        this.game_container = document.getElementById('game-container');
    }
    createLayers(num){
        for (let i = 0; i < num; i++) {
            const layer = document.createElement('canvas');
            const ctx = layer.getContext('2d');
            this.game_container.appendChild(layer);
            layer.style.zIndex = i;
            this.layers.push((layer, ctx));
        }
    }
    resizeLayers(w, h){
        this.layers.forEach(element => {
            const canvas = element[0];
            canvas.width = w;
            canvas.height = h;
        });
    }
}