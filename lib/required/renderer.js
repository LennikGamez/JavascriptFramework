

export default class Render{
    static LINE_CAP_BUTT = 'butt';
    static LINE_CAP_ROUND = 'round';
    static LINE_CAP_SQUARE = 'square';

    constructor(layers){
        this.layers = layers || [];
        this.clayer = this.layers[0].canvas;
        this.clayerContext = this.layers[0].context;
    }
    getLayerContext(layer){
        if(this.layers.length >= layer){
            throw Error(`Index ${layer} out of range! There are only ${this.layers.length} layers`);
        }
        return this.layers[layer].context;
    }
    getLayer(layer){
        if(this.layers.length >= layer){
            throw Error(`Index ${layer} out of range! The last valid index is ${this.layers.length - 1}`);
        }
        return this.layers[layer].canvas;
    }

    updateSize(width, height){
        this.width = width;
        this.height = height;
    }
    clearLayer(){
        this.clayerContext.clearRect(0,0, this.width, this.height);
    }
    clearBg(){
        this.layers.forEach(element => {
            element.context.clearRect(0, 0, element.canvas.width, element.canvas.height);
        });
    }
    beginPath(){
        this.clayerContext.beginPath();
    }
    stroke(){
        this.clayerContext.stroke();
    }
    fill(){
        this.clayerContext.fill();
    }

    // sets
    setFillColor(color){     // css color value
        this.clayerContext.fillStyle = color;
    }
    setStrokeColor(color){     // css color value
        this.clayerContext.strokeStyle = color;
    }
    setLineWidth(width){
        this.clayerContext.lineWidth = width;
    }
    setLineCap(cap){
        this.clayerContext.lineCap = cap;
    }
    setFont(f){
        this.clayerContext.font = f;
    }
    setBGImage(path){
        // this.getLayer(layer).style.backgroundImage = path;
        this.clayer.style.setProperty('background-image',`url(${path})`)
    }
    selectLayer(index){
        this.clayer = this.getLayer(index);
        this.clayerContext = this.getLayerContext(index);
    }

    onLayer(index, func){
        this.selectLayer(index);
        func();
        this.selectLayer(0)
    }


    // shapes

    loadImage(src){
        const img = new Image();
        img.src = src;
        return img;
    }

    image(position, image, rotation=0, width=0, height=0){
        const ctx = this.clayerContext;
        if(width == 0){ width = image.width; }
        if(height == 0){ height = image.height; }

        ctx.translate(position.x, position.y);
        if(rotation != 0){
            ctx.rotate(rotation);
        }
        ctx.drawImage(image, -width/2, -height/2, width, height)
        ctx.resetTransform();
    }

    fillEllipse(x, y, rx, ry, rotation=Math.PI/4, sangle=0, eangle=360){
        const ctx = this.clayerContext;
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, rotation, sangle, eangle);
        ctx.fill();
    }

    line(x, y, x2, y2){
        const ctx = this.clayerContext;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2)
        ctx.stroke();
    }

    fillText(position, text){
        this.clayerContext.fillText(text, position.x, position.y);
    }
}