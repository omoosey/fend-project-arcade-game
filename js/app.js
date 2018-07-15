// Enemies our player must avoid
// var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
//     this.sprite = 'images/enemy-bug.png';
// };

class Enemy {
    //add speed variable
    constructor(speed, x, y){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt){
        (this.x += this.speed) * dt;
        if (this.x > 505) {
            this.x = -101;
        }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
// };

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
    // ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(){
        this.x = 202;
        this.y = 415;
        this.sprite = 'images/char-boy.png';
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(){

    }
    handleInput(key){
        switch(key) {
            case 'left':
                this.x -= 101;
                break;
            case 'right':
                this.x += 101;
                break;
            case 'up':
                this.y -= 83;
                break;
            case 'down':
                this.y += 83;
                break;
        }
        if(this.x < 0){
            this.x = 0;
        } else if (this.x > 404){
            this.x = 404;
        } else if (this.y < 0) {
            this.y = 0;
        } else if (this.y > 415){
            this.y = 415;
        }
    }
} 

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();
let allEnemies = [];
const speedValues = [3, 4, 5, 6];
const yPositions = [83, 166, 249];

for (let i = 0; i <= 5; i++){
    let speed = speedValues[Math.floor(Math.random() * speedValues.length)];
    let y = yPositions[Math.floor(Math.random() * yPositions.length)];
    allEnemies[i] = new Enemy(speed, 0, y);
}

const enemy1 = new Enemy(3, 0, 166);
const enemy2 = new Enemy(5, 0, 83);
const enemy3 = new Enemy(4, 0, 249);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    // console.log(allowedKeys[e.keyCode]);
});
