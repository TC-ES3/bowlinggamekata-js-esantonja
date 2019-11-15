import Game from "./bowling"

test("gutter game", () => {
    const game = new Game();
    for(let i = 0; i < 20; i += 1) {
        game.roll(0);
    }

    expect(game.score()).toBe(0);
})