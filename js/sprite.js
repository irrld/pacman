class Sprite {
    constructor(image, sx, sy, w, h) {
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.w = w;
        this.h = h;
    }

    draw(x, y, ctx) {
        ctx.drawImage(image, this.sx * this.w, this.sy * this.h, this.w, this.h, x, y, this.w, this.h);
    }
}