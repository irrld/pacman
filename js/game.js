"use strict"
const MAP_OFFSET_X = 0;
const MAP_OFFSET_Y = 24;
const WIDTH = 224;
const HEIGHT = 288;
const SCALE = 4;
// 0 air
// 1 wall
// 2 food
// 3 powerup
// 4 gate

const BLOCK_AIR = 0;
const BLOCK_WALL = 1;
const BLOCK_FOOD = 2;
const BLOCK_POWERUP = 3;
const BLOCK_GATE = 4;

const DIRECTION_NONE = 0;
const DIRECTION_UP = 1;
const DIRECTION_RIGHT = 2;
const DIRECTION_BOTTOM = 3;
const DIRECTION_LEFT = 4;

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 1, 1, 1, 4, 4, 1, 1, 1, 0, 1, 1, 2, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 3, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 3, 1],
    [1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
const characterAnimations = [
    [{ x: 2, y: 0 }], // DIRECTION_NONE,
    [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 2, y: 0 }], // DIRECTION_UP,
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }], // DIRECTION_RIGHT,
    [{ x: 7, y: 0 }, { x: 8, y: 0 }, { x: 2, y: 0 }], // DIRECTION_BOTTOM,
    [{ x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }] // DIRECTION_LEFT,
]

function opposite(direction) {
    switch (direction) {
        case DIRECTION_NONE:
            return DIRECTION_NONE;
        case DIRECTION_UP:
            return DIRECTION_BOTTOM;
        case DIRECTION_RIGHT:
            return DIRECTION_LEFT;
        case DIRECTION_BOTTOM:
            return DIRECTION_UP;
        case DIRECTION_LEFT:
            return DIRECTION_RIGHT;
    }
}

class Character {
    x = 13.5;
    y = 23;
    direction = DIRECTION_NONE;
    nextdirection = DIRECTION_NONE;
    anim = 0;
    moved = false;
    width = 1;
    height = 1;

    update(deltaTime) {
        this.moved = false;
        if (this.nextdirection != DIRECTION_NONE && this.direction != this.nextdirection) {
            var olddirection = this.direction;
            this.direction = this.nextdirection;
            if (opposite(this.nextdirection) != olddirection) {
                var oldx = this.x;
                var oldy = this.y;
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                if (olddirection == DIRECTION_NONE || (Math.abs(oldx - this.x) <= 0.1 && Math.abs(oldy - this.y) <= 0.1)) {
                    this.move(deltaTime);
                }
                if (!this.moved) {
                    this.x = oldx;
                    this.y = oldy;
                    this.moved = false;
                    this.nextdirection = this.direction;
                    this.direction = olddirection;
                }
            }
        }
        this.move(deltaTime);
        if (this.moved) {
            this.anim += deltaTime / 44;
            for (var r in foods) {
                var food = foods[r];
                if (this.x < food.x + 0.2 &&
                    this.x + this.width > food.x + 0.6 &&
                    this.y < food.y + 0.2 &&
                    this.y + this.height > food.y + 0.6) {
                    foods.splice(r, 1);
                    addScore(10);
                    //sound.eatPellet();
                    break;
                }
            }
        } else {
            this.anim = 0;
        }
    }

    draw() {
        var frames = characterAnimations[this.direction];
        drawSprite(this.x * 8 - 3.3, this.y * 8 - 3.6, frames[Math.floor(this.anim) % frames.length].x, frames[Math.floor(this.anim) % frames.length].y);
        /*ctx.fillStyle = "#FFFF00";
        ctx.fillRect(this.x * 16, this.y * 16, 16, 16);*/
    }

    move(deltaTime) {
        var dx = 0, dy = 0;
        var speed = (11 / 1000) * deltaTime; // 11 tiles per second, 11/1000 per millisecond * deltatime

        switch (this.direction) {
            case DIRECTION_NONE:
                break;
            case DIRECTION_UP:
                dy -= speed;
                break;
            case DIRECTION_RIGHT:
                dx += speed;
                break;
            case DIRECTION_BOTTOM:
                dy += speed;
                break;
            case DIRECTION_LEFT:
                dx -= speed;
                break;
        }
        this.x += dx;
        this.y += dy;
        if (this.x <= -1) {
            this.x = map[0].length - 0.1;
        }
        if (this.x >= map[0].length) {
            this.x = -0.9;
        }
        console.log(this.x);
        for (var r in tiles) {
            var tile = tiles[r];
            if (this.x < tile.x + tile.width &&
                this.x + this.width > tile.x &&
                this.y < tile.y + tile.height &&
                this.y + this.height > tile.y) {
                this.x -= dx;
                this.y -= dy;
                return;
            }
        }
        this.moved = true;
    }
}

const mapImage = new Image();
mapImage.src = 'assets/map.png';
const spritesImage = new Image();
spritesImage.src = 'assets/sprites.png';

const fontImage = new Image();
fontImage.src = 'assets/font.png';

var canvas = document.getElementById("game");
canvas.height = HEIGHT * SCALE;
canvas.width = WIDTH * SCALE;

var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
ctx.scale(SCALE, SCALE);

const foods = [];
const gates = [];
const keystates = {};
const tiles = [];

const character = new Character();
var time = 0;
var highScore = 0;
var blinkTimer = 0;
var currentPlayer = 1;
var hasSecondPlayer = false;

var player1Score = 0;
var player2Score = 0;
var frightenedTimer = 0;
var level = 1;

for (var y = 0; y < map.length; y++) {
    const row = map[y];
    for (var x = 0; x < row.length; x++) {
        const block = row[x];
        if (block == BLOCK_FOOD) {
            foods.push({ x: x, y: y, type: 0 });
        } else if (block == BLOCK_POWERUP) {
            foods.push({ x: x, y: y, type: 1 });
        } else if (block == BLOCK_GATE) {
            tiles.push({ x: x, y: y, width: 1, height: 1, type: 0 });
            gates.push({ x: x, y: y });
        } else if (block == BLOCK_WALL) {
            tiles.push({ x: x, y: y, width: 1, height: 1, type: 0 });
        }
    }
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented || event.code == 'F5') {
        return; // Do nothing if the event was already processed
    }
    keystates[event.code] = { down: true };
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);

window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    keystates[event.code] = { down: false };
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);

var lastRender = 0
var audioCtx;
var sound;
function start() {
    audioCtx = new window.AudioContext();
    audioCtx.resume();
    sound = new Sound(audioCtx);
    window.requestAnimationFrame(loop);
}

function loop(timestamp) {
    var deltaTime = Math.min(timestamp - lastRender, 42)

    update(deltaTime);
    draw();
    time += deltaTime;

    lastRender = timestamp
    window.requestAnimationFrame(loop)
}


function isKeyDown(code) {
    var state = keystates[code];
    return state && state.down;
}

function update(deltaTime) {
    if (isKeyDown('ArrowLeft')) {
        character.nextdirection = DIRECTION_LEFT;
        //console.log("Left");
    } else if (isKeyDown('ArrowRight')) {
        character.nextdirection = DIRECTION_RIGHT;
        //console.log("Right");
    } else if (isKeyDown('ArrowUp')) {
        character.nextdirection = DIRECTION_UP;
        //console.log("Up");
    } else if (isKeyDown('ArrowDown')) {
        character.nextdirection = DIRECTION_BOTTOM;
        //console.log("Bottom");
    }
    character.update(deltaTime);
    blinkTimer += deltaTime;
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.drawImage(mapImage, 0, 0);
    ctx.save();
    ctx.translate(MAP_OFFSET_X, MAP_OFFSET_Y);
    ctx.fillStyle = "#fcb5ff";
    for (var i = 0; i < gates.length; i++) {
        const element = gates[i];
        ctx.fillRect(element.x * 8, element.y * 8 + 5, 8, 2);
    }
    ctx.fillStyle = "#ffb897";
    for (var i = 0; i < foods.length; i++) {
        const food = foods[i];
        if (food.type == 0) {
            ctx.fillRect(food.x * 8 + 3, food.y * 8 + 3, 2, 2);
        } else if (food.type == 1) {
            if (Math.floor(blinkTimer) % 350 < 175) {
                drawSprite(food.x * 8 - 4, food.y * 8 - 4, 0, 9);
            }
        }
    }
    /*
    for (var y = 0; y < map.length; y++) {
        const row = map[y];
        for (var x = 0; x < row.length; x++) {
            const block = row[x];
            if (block == BLOCK_WALL) {
                ctx.fillStyle = "#2121ff";
                ctx.fillRect(x * 16, y * 16, 16, 16);
            }
        }
    }*/
    character.draw();
    ctx.restore();

    if (currentPlayer == 1) {
        if (Math.floor(blinkTimer) % 500 < 250) {
            drawString(24, 0, "1UP")
        }
    } else {
        drawString(24, 0, "1UP")
    }
    drawString(56, 8, player1Score.toString().padStart(2, '0'), true)
    if (hasSecondPlayer) {
        if (currentPlayer == 2) {
            if (Math.floor(blinkTimer) % 500 < 250) {
                drawString(176, 0, "2UP")
            }
        } else {
            drawString(176, 0, "2UP")
        }
        drawString(208, 8, player2Score.toString().padStart(2, '0'), true)
    }

    drawString(72, 0, "HIGH SCORE")
    drawString(136, 8, highScore.toString().padStart(2, '0'), true)
}

function drawSprite(dx, dy, px, py) {
    ctx.drawImage(spritesImage, px * 16, py * 16, 16, 16, dx, dy, 16, 16);
}

function addScore(a) {
    if (currentPlayer == 1) {
        player1Score += a;
        if (highScore < player1Score) {
            highScore = player1Score;
        }
    } else if (currentPlayer == 2) {
        player2Score += a;
        if (highScore < player2Score) {
            highScore = player2Score;
        }
    }
}

function drawString(dx, dy, text, reverseAlign = false, color = "#dedede") {
    var tdx = dx - (reverseAlign ? (text.length * 8) : 0);
    var tdy = dy;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        drawCharacter(tdx + (i * 8), tdy, char, color);
    }
}
var characterBuffer = document.createElement('canvas');
characterBuffer.width = 8;
characterBuffer.height = 8;
var characterBuffer2d = characterBuffer.getContext('2d');

function drawCharacter(dx, dy, char, color) {
    characterBuffer2d.fillStyle = color;
    characterBuffer2d.fillRect(0, 0, characterBuffer.width, characterBuffer.height);
    characterBuffer2d.globalCompositeOperation = "destination-atop";
    characterBuffer2d.drawImage(fontImage, (char.charCodeAt(0) - 32) * 8, 0, 8, 8, 0, 0, 8, 8);
    ctx.drawImage(characterBuffer, dx, dy);
}