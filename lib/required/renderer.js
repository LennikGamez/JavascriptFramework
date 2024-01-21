

export default class Render{
    static LINE_CAP_BUTT = 'butt';
    static LINE_CAP_ROUND = 'round';
    static LINE_CAP_SQUARE = 'square';

    constructor(ctx){
        this.ctx = ctx;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }
    updateSize(width, height){
        this.width = width;
        this.height = this.height;
    }
    clearBg(){
        this.ctx.clearRect(0,0, this.width, this.height);
    }
    beginPath(){
        this.ctx.beginPath();
    }
    stroke(){
        this.ctx.stroke();
    }
    fill(){
        this.ctx.fill();
    }

    // sets
    setFillColor(color){     // css color value
        this.ctx.fillStyle = color;
    }
    setStrokeColor(color){     // css color value
        this.ctx.strokeStyle = color;
    }
    setLineWidth(width){
        this.ctx.lineWidth = width;
    }
    setLineCap(cap){
        this.ctx.lineCap = cap;
    }
    setFont(f){
        this.ctx.font = f;
    }



    // shapes

    loadImage(src){
        const img = new Image();
        img.src = src;
        return img;
    }

    image(position, image, rotation=0, width=0, height=0){
        if(width == 0){ width = image.width; }
        if(height == 0){ height = image.height; }

        this.ctx.translate(position.x, position.y);
        if(rotation != 0){
            this.ctx.rotate(rotation);
        }
        this.ctx.drawImage(image, -width/2, -height/2, width, height)
        this.ctx.resetTransform();
    }

    fillEllipse(x, y, rx, ry, rotation=Math.PI/4, sangle=0, eangle=360){
        this.ctx.beginPath();
        this.ctx.ellipse(x, y, rx, ry, rotation, sangle, eangle);
        this.ctx.fill();
    }

    line(x, y, x2, y2){
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x2, y2)
        this.ctx.stroke();
    }

    fillText(position, text){
        this.ctx.fillText(text, position.x, position.y);
    }
}