import Render from "./renderer.js";



export default class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.renderer = new Render(this.ctx);

        window.addEventListener('resize', e =>{
            let w = e.target.innerWidth;
            let h = e.target.innerHeight;
            this.resize(w, h);
        });
    }

    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;

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
        var game = this;
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

