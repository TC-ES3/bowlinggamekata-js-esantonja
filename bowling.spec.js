import Game from "./bowling"

let game;
beforeEach(() => {
    game = new Game();
});

function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i += 1) {
        game.roll(pins);
    }
}

test("gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
})

test("all ones", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);    
})

test("one spare", () => {
    game.roll(5);
    game.roll(5); // spare
    game.roll(3);
    expect(game.score()).toBe(16);    
})