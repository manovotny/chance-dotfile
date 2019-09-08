const Chance = require("chance");

const dotfile = require("./index");

describe("index.js", () => {
    const chance = new Chance();

    let word;

    beforeEach(() => {
        word = chance.word();

        spyOn(Chance.prototype, "word").and.returnValue(word);

        chance.mixin({
            dotfile
        });
    });

    test("should return random dotfile", () => {
        const result = chance.dotfile();

        expect(result).toStrictEqual(`.${word}`);
    });
});
