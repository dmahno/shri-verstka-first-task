import React, { Component } from 'react';
import './details.page.scss';
import Card from '../../components/Card/Card';
import CARD_DATA from '../../components/Card/CardData';
import BuildLogArea from '../../components/BuildLogArea/BuildLogArea';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      cards: CARD_DATA
    };
  }

  render() {
    const { cards } = this.state;
    return (
      <div className='app-root details-page__content'>
        {cards
          .filter((item, idx) => idx === 0)
          .map(({ titleNumber, ...otherCollectionProps }) => (
            <Card
              key={titleNumber}
              titleNumber={titleNumber}
              {...otherCollectionProps}
            />
          ))}
        <BuildLogArea />
      </div>
    );
  }
}

export default Details;
