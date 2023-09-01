const Game = require("./Game");

let [g1,msg] = Game.newGame("A","B")
console.log(g1);
console.log(g1.play(7));
console.log(g1.play(5));
console.log(g1.play(1));
console.log(g1.play(3));

console.log(g1.play(2));

console.log(g1.play(4));

console.log(g1.play(0));
console.log(g1.play(6));
console.log(g1.play(8));

// console.log(g1.play(0))
// console.log(g1.play(1))
// console.log(g1.play(2))
// // console.log(g1.board.cells[0].mark = "yash")
// console.log(g1.play(3))
// console.log(g1.play(4))
// console.log(g1.play(5))
// console.log(g1.play(6))//winner
// console.log(g1.play(7))
// console.log(g1.play(8))
// console.log(g1.play(8))
// console.log(g1.play(8))
// console.log(g1.play(8))





