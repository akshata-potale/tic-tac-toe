class Cell{
    constructor(){
        this.mark = "empty"
    }

    isEmpty(){
        return this.mark =='empty'
    }

    getMark(){
        return this.mark
    }

    MarkCell(Symbol){
        this.mark = Symbol
    }
   
}
module.exports = Cell;