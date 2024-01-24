import Render from "./renderer.js";
import Scene from "./scene.js";



export default class Game{
    constructor(scene){
        
        // this.width = this.canvas.width;
        // this.height = this.canvas.height;
        
        this.activeScene = scene || new Scene(3);
        this.renderer = new Render(this.activeScene.layers);
        this.resize(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', e =>{
            let w = e.target.innerWidth;
            let h = e.target.innerHeight;
            this.resize(w, h);
        });
    }

    resize(width, height){
        // this.canvas.width = width;
        // this.canvas.height = height;
        this.activeScene.resizeLayers(width, height);

        this.width = width;
        this.height = height;

        this.renderer.updateSize(width, height)
    }


    render(){
    }

    update(dt){
    }


    run(){
        let lastTime = 0;
        const game = this;
        function animate(timeStamp){
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;
            game.update(deltaTime / 1000);
            game.renderer.clearBg();
            game.render();
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }
}

