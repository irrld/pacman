

const pinkyAnimations = [
	[{ x: 2, y: 0 }], // DIRECTION_NONE,
	[{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 2, y: 0 }], // DIRECTION_UP,
	[{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }], // DIRECTION_RIGHT,
	[{ x: 7, y: 0 }, { x: 8, y: 0 }, { x: 2, y: 0 }], // DIRECTION_BOTTOM,
	[{ x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }] // DIRECTION_LEFT,
]

class Ghost {
	anim = 0;
	direction = DIRECTION_NONE;

	constructor(x, y, animations) {
		this.x = x;
		this.y = y;
		this.animations = animations;
	}

	update(deltaTime) {
		this.anim += deltaTime / 44;
	}

	draw() {
		var frames = animations[this.direction];
		drawSprite(spritesImage, this.x * 8 - 3.3, this.y * 8 - 3.6, frames[Math.floor(this.anim) % frames.length].x, frames[Math.floor(this.anim) % frames.length].y);
	}
}