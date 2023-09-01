const Cell = require("./Cell")

class Board{
    constructor(){
        this.cells = [new Cell(),new Cell(),new Cell(),
            new Cell(),new Cell(),new Cell(),
            new Cell(),new Cell(),new Cell()]
    }
    isEmpty(CellNumber){
        return this.cells[CellNumber].isEmpty();
    }

    getCellMark(CellNumber,Symbol){
         this.cells[CellNumber].MarkCell(Symbol)
    }

    displayBoard(){
        console.log(this);
    }

    gameDraw(){
        for (let index = 0; index < this.cells.length; index++) {
            if(this.cells[index].isEmpty()){
                return false
            }
        }
        return true
    }

    

    analyseBoard(){
        if (this.cells[0].getMark() == this.cells[1].getMark() && this.cells[0].getMark() == this.cells[2].getMark() && 
            !this.cells[0].isEmpty()) {
                return this.cells[0].getMark();
        }

        if (this.cells[3].getMark() == this.cells[4].getMark() && this.cells[3].getMark() == this.cells[5].getMark() && 
            !this.cells[3].isEmpty()) {
                return this.cells[3].getMark();
        }

        if (this.cells[6].getMark() == this.cells[7].getMark() && this.cells[6].getMark()==this.cells[8].getMark() &&
            this.cells[6].isEmpty()) {
                return this.cells[6].getMark();
        }

        if (this.cells[0].getMark() == this.cells[3].getMark() && this.cells[0].getMark() == this.cells[6].getMark() && 
            !this.cells[0].isEmpty()) {
                return this.cells[0].getMark();
        }

        if (this.cells[1].getMark() == this.cells[4].getMark() && this.cells[1].getMark() == this.cells[7].getMark() && 
            !this.cells[1].isEmpty()) {
                return this.cells[1].getMark();
        }

        if (this.cells[2].getMark() == this.cells[5].getMark() && this.cells[2].getMark() == this.cells[8].getMark() && 
            !this.cells[2].isEmpty()) {
                return this.cells[2].getMark();
        }

        if (this.cells[2].getMark() == this.cells[4].getMark() && this.cells[2].getMark() == this.cells[6].getMark() && 
            !this.cells[2].isEmpty()) {
                return this.cells[2].getMark();
        }

        if (this.cells[0].getMark() == this.cells[4].getMark() && this.cells[0].getMark() == this.cells[8].getMark() && 
            !this.cells[0].isEmpty()) {
                return this.cells[0].getMark();
        }

        
        return 'Continue Playing'

        
    }

    
}
module.exports = Board