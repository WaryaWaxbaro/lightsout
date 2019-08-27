import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';
import { createBoard, toggleValue, toggleNeigbours } from './Helper';


class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5
  }

  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.restart = this.restart.bind(this);

    this.state = {
      hasWon: false,
      board: createBoard(this.props.nrows, this.props.ncols)
    }
  }

  flipCellsAround(coord) {
    let board = this.state.board;
    let [y, x] = coord;

    let currentValue = this.state.board[y][x];
    let newValue = toggleValue(currentValue);

    let newBoardVal = toggleNeigbours(y, x, board, currentValue, newValue);

    let win = newBoardVal.flat().every(w => w === ".");
    this.setState({hasWon: win, board: newBoardVal});

  }

  click(evt){
    let targetId = evt.target.id.split("").map(Number);
    this.flipCellsAround(targetId);
  }

  cellContent(c) {
    return c === "O" ? true : c === "." ? false : null;
  }

  restart(){
    //Easy board layout
/*     [
      [".", ".", ".", ".", "."],
      [".", ".", "O", ".", "."],
      [".", "O", "O", "O", "."],
      [".", ".", "O", ".", "."],
      [".", ".", ".", ".", "."]
    ] */
    this.setState({hasWon: false, board: createBoard(this.props.nrows, this.props.ncols)});
  }

  render() {

    let newBoard = this.state.board.map((b, i) => (
      <tr key={i}>
        {b.map((c, j) => (
          <Cell key={`${i}${j}`} pos={{x: i, y:j}} isLit={this.cellContent(c)} ev={this.click}/>
        ))}
      </tr>
    ));
    return(
      <div className="Board">
        {this.state.hasWon ? <div className="Board-win">
          <p>You Won!</p>
          <button onClick={this.restart}>Rematch</button>
        </div> : <div className="Board-container">
          <div className="Board-neon-flux">
            <div className="Board-neon">lights out</div>
            <div className="Board-flux"> game</div>
          </div>
          <table className="Board-table">
            <tbody>
              {newBoard}
            </tbody>
          </table>
        </div>}
      </div>
    )
  }
}

export default Board;
