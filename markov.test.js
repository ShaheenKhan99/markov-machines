const { MarkovMachine } = require("./markov");

describe("markov machine test", function() {
    test('makes chains', function () {
      let mm = new MarkovMachine("this is a test");
  
      expect(mm.chains).toEqual(new Map([
        ["this", ["is"]],
        ["is", ["a"]],
        ["a", ["test"]],
        ["test", [null]]
      ]) 
    ); 
  }); 

  
  test('choice from array', function () {
    expect(MarkovMachine.choice([1, 1, 1])).toEqual(1);
    expect([1, 2, 3]).toContain(MarkovMachine.choice([1, 2, 3]));
    });

  test("type of output", function () {
    let mm = new MarkovMachine("testing the markov machine");
    let output = mm.makeText();
    expect(typeof output).toEqual("string");
  });
  

  test('generates semi-predictable text', function () {
    let mm = new MarkovMachine("is a test");
    let text = mm.makeText();
    expect(["is a test", "a test", "test"]).toContain(text);
    });
  });
  