export default class Game {
    _rolls = [];

    roll(pins) {
        this._rolls.push(pins);
    }

    score() {
        const rolls = this._rolls;
        let score = 0;
        let i = 0;
        for(let frame = 0; frame < 10; frame++) {
            score += rolls[i] + rolls[i + 1];
            i += 2
        }

        return score;
    }
}