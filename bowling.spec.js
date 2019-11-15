import Game from "./bowling";

let game;
beforeEach(() => {
  game = new Game();
});

function rollMany(rolls, pins) {
  for (let i = 0; i < rolls; i += 1) {
    game.roll(pins);
  }
}

function rollSpare() {
    game.roll(5);
    game.roll(5);
}

function rollStrike() {
    game.roll(10);
}

test("gutter game", () => {
  rollMany(20, 0);
  expect(game.score()).toBe(0);
});

test("all ones", () => {
  rollMany(20, 1);
  expect(game.score()).toBe(20);
});

test("one spare", () => {
  rollSpare(); 
  game.roll(3);
  rollMany(17, 0);
  expect(game.score()).toBe(16);
});

test("one strike", () => {
    rollStrike(); 
    game.roll(3);
    game.roll(4);
    rollMany(18, 0);
    expect(game.score()).toBe(24);
  });  