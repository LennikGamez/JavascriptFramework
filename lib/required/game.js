import Render from "./renderer.js";
import Scene from "./scene.js";



export default class Game{
    constructor(scene, options={}){
        // option parameters
        const { fullscreen = true, size = [800, 400] } = options;


        ///////////////////////////////////////////////////////////////////////
        this.activeScene = scene || new Scene(3);
        this.renderer = new Render(this.activeScene.layers);

        if(!fullscreen){
            // fixed size
            this.width = size[0];
            this.height = size[1];
        }else{
            // fullscreen
            this.width = window.innerWidth;
            this.height = window.innerHeight;

            window.addEventListener('resize', e =>{
                const { innerWidth: w, innerHeight: h } = e.target;
                this.resize(w, h);
            });
        }

        this.resize(this.width, this.height);
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

