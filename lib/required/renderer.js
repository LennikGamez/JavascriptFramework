

export default class Render{
    static LINE_CAP_BUTT = 'butt';
    static LINE_CAP_ROUND = 'round';
    static LINE_CAP_SQUARE = 'square';

    constructor(layers){
        this.layers = layers || [];
    }
    getLayerContext(layer){
        return this.layers[layer].getContext('2d');
    }
    getLayer(layer){
        return this.layers[layer];
    }

    updateSize(width, height){
        this.width = width;
        this.height = height;
    }
    clearBgOnLayer(layer=0){
        this.getLayerContext(layer).clearRect(0,0, this.width, this.height);
    }
    clearBg(){
        this.layers.forEach(element => {
            element.getContext('2d').clearRect(0, 0, element.width, element.height);
        });
    }
    beginPath(layer=0){
        this.getLayerContext(layer).beginPath();
    }
    stroke(layer=0){
        this.getLayerContext(layer).stroke();
    }
    fill(layer=0){
        this.getLayerContext(layer).fill();
    }

    // sets
    setFillColor(color, layer=0){     // css color value
        this.getLayerContext(layer).fillStyle = color;
    }
    setStrokeColor(color, layer=0){     // css color value
        this.getLayerContext(layer).strokeStyle = color;
    }
    setLineWidth(width, layer=0){
        this.getLayerContext(layer).lineWidth = width;
    }
    setLineCap(cap, layer=0){
        this.getLayerContext(layer).lineCap = cap;
    }
    setFont(f, layer=0){
        this.getLayerContext(layer).font = f;
    }
    setBGImage(path, layer=0){
        // this.getLayer(layer).style.backgroundImage = path;
        this.getLayer(layer).style.setProperty('background-image',`url(${path})`)
    }



    // shapes

    loadImage(src){
        const img = new Image();
        img.src = src;
        return img;
    }

    image(position, image, rotation=0, width=0, height=0, layer=0){
        const ctx = this.getLayerContext(layer);
        if(width == 0){ width = image.width; }
        if(height == 0){ height = image.height; }

        ctx.translate(position.x, position.y);
        if(rotation != 0){
            ctx.rotate(rotation);
        }
        ctx.drawImage(image, -width/2, -height/2, width, height)
        ctx.resetTransform();
    }

    fillEllipse(x, y, rx, ry,layer=0, rotation=Math.PI/4, sangle=0, eangle=360){
        const ctx = this.getLayerContext(layer);
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, rotation, sangle, eangle);
        ctx.fill();
    }

    line(x, y, x2, y2, layer=0){
        const ctx = this.getLayerContext(layer);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2)
        ctx.stroke();
    }

    fillText(position, text, layer=0){
        this.getLayerContext(layer).fillText(text, position.x, position.y);
    }
}