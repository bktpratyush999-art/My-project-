class Fighter {
    constructor(name, health, attackPower, defense) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.defense = defense;
    }

    attack(opponent) {
        const damage = Math.max(0, this.attackPower - opponent.defense);
        opponent.health -= damage;
        console.log(`${this.name} attacks ${opponent.name} for ${damage} damage.`);
    }

    isAlive() {
        return this.health > 0;
    }
}

class AI {
    constructor(name) {
        this.fighter = new Fighter(name, 100, 10, 5);
    }

    chooseAction(opponent) {
        if (this.fighter.health < 30) {
            console.log(`${this.fighter.name} is healing!`);
            this.fighter.health += 20; // Simple healing action.
        } else {
            this.fighter.attack(opponent);
        }
    }
}

class Game {
    constructor() {
        this.player = new Fighter('Player', 100, 15, 3);
        this.ai = new AI('AI');
        this.gameOver = false;
    }

    gameLoop() {
        console.log('Game Start!');
        while (!this.gameOver) {
            this.player.attack(this.ai.fighter);
            if (!this.ai.fighter.isAlive()) {
                console.log('AI is defeated!');
                this.gameOver = true;
                break;
            }

            this.ai.chooseAction(this.player);
            if (!this.player.isAlive()) {
                console.log('Player is defeated!');
                this.gameOver = true;
                break;
            }
            console.log(`Player Health: ${this.player.health}, AI Health: ${this.ai.fighter.health}`);
        }
        console.log('Game Over!');
    }
}

// Start the game
const game = new Game();
game.gameLoop();