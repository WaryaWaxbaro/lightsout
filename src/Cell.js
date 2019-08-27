import React, {Component} from 'react'
import "./Cell.css"


class Cell extends Component {
  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");
    let cellId = `${this.props.pos.x}${this.props.pos.y}`;

    return (
        <td className={classes} id={cellId} onClick={this.props.ev}></td>
    )
  }
}


export default Cell