import { Component } from 'react';
import "./card-list.styles.css";

class CardList extends Component {

  render() {
    const {monsters} = this.props;
    return (
      <div className='card-list'>
      {monsters.map((monster) =>{
        const { name, email, id } = monster
        return (
        <div class='card-container' key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <h2>{email}</h2>
        </div>
      )})}
      </div>
    )
  }
}

export default CardList;
