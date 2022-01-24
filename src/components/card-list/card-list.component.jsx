import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
import { Component } from "react/cjs/react.development";

// const CardList = (props) => {
//   return (
//     <div className="card-list">
//       {props.monsters.map((monster) => (
//         <Card key={monster.id} monster={monster} />
//       ))}
//     </div>
//   );
// };

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}
export default CardList;
