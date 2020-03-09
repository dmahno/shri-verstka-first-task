import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import CARD_DATA from '../../components/Card/CardData';
import Button from '../../components/Button/Button';

class History extends Component {
  constructor() {
    super();
    this.state = {
      cards: CARD_DATA
    };
  }

  render() {
    const { cards } = this.state;
    return (
      <div className='content'>
        {cards.map(({ titleNumber, ...otherCollectionProps }) => (
          <Card
            key={titleNumber}
            titleNumber={titleNumber}
            {...otherCollectionProps}
          />
        ))}
        <Button
          classNameElement='button_size_xs'
          name='Show more'
          classNameModifier='button_view'
        />
      </div>
    );
  }
}

export default History;
