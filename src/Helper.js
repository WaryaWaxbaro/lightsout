export const isRange = val => val >= 0 && val < 5;
export const toggleCurrentCell = (y, x, b, cu, ne) => {
    for(let i = 0; i < b.length; i++){
      for(let j = 0; j < b[i].length; j++){
        if(b[y][x] === cu){
          b[y][x] = ne;
        }
      }
    }
    return b;
  }
export const createBoard = (y, x) => {
    let board = [];
    for(let i = 0; i < y; i++){
      let arr = [];
      for(let j = 0; j < x; j++){
        let ran = Math.floor(Math.random() * 2);
        ran === 0 ? arr.push(".") : arr.push("O");
      }
      board.push(arr);
    }
    return board;
}

export const toggleValue = (val) => val === "O" ? "." : "O";

export const toggleNeigbours = (y, x, board, currentValue, newValue) => {

    if(isRange(y - 1)){
        toggleCurrentCell(y, x, board, currentValue, newValue)[y - 1][x] =
        toggleValue(toggleCurrentCell(y, x, board, currentValue, newValue)[y - 1][x]);
      }
      if(isRange(y + 1)){
        toggleCurrentCell(y, x, board, currentValue, newValue)[y + 1][x] =
        toggleValue(toggleCurrentCell(y, x, board, currentValue, newValue)[y+1][x]);
      }
      if(isRange(x + 1)){
        toggleCurrentCell(y, x, board, currentValue, newValue)[y][x + 1] =
        toggleValue(toggleCurrentCell(y, x, board, currentValue, newValue)[y][x + 1]);
      }
      if(isRange(x - 1)){
        toggleCurrentCell(y, x, board, currentValue, newValue)[y][x - 1] =
        toggleValue(toggleCurrentCell(y, x, board, currentValue, newValue)[y][x - 1]);
      }

      return board;
}