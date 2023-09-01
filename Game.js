const Board = require("./Board");
const Player = require("./Player");

class Game{
    constructor(player0,player1){
        this.players = [new Player(player0,'X'),new Player(player1,'O')]
        this.board = new Board();
        this.turn = 0;
        this.isGameEnded = false;
        this.GameStatus = " ";

    }
    

    static newGame(player0,player1){
        if(typeof player0 !='string' ||typeof player1 !='string'||player0==player1){
            return [null,"invalid player name"]
        }
        return [new Game(player0,player1),"Game Created"]
    }

    play(CellNumber){

        if(this.isGameEnded){
            return this.GameStatus
        }

        if(typeof CellNumber != 'number'){ 
            return "Invalid Cellnumber"
        }
        if(typeof CellNumber<0 || typeof CellNumber>8){
            return "Invalid cellnumber"
        }

        if(!this.board.isEmpty(CellNumber)){
            return "Cell is not empty"
        }

        let CurrentPlayer = this.players[this.turn % 2]
        this.board.getCellMark(CellNumber,CurrentPlayer.getSymbol());
        this.turn++
        this.board.displayBoard();

        let Winner = this.board.analyseBoard();
        if(Winner == 'X'){
            this.isGameEnded = true 
            this.GameStatus = `${this.players[0].getName()} is the winner`

            return`${this.players[0].getName()} is Winner`

        }
        else if(Winner == 'O'){
            this.isGameEnded = true 
            this.GameStatus = `${this.players[1].getName()} is the winner`
            return `${this.players[1].getName()} is winner`
        }

        let Draw = this.board.gameDraw();
        if(Draw){
            this.isGameEnded = true
            return "Game ended as draw"
        }

        return "Continue"
        }
    }

module.exports = Game
