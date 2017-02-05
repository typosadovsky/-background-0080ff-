import React, {Component} from 'react';

import SwipeCards from 'react-native-swipe-cards';

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

const styles = {
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

let Card = React.createClass({
  render() {
    return (
      <div style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <span>{this.props.text}</span>
      </div>
    )
  }
});

let NoMoreCards = React.createClass({
  render() {
    return (
      <div style={styles.noMoreCards}>
        <span>No more cards</span>
      </div>
    )
  }
});

class Swipe extends Component {
	getInitialState() {
		return {
			cards: Cards
		}
	}
	handleLeft(card){
		console.log(card)
	}
	handleRight(card){
		console.log(card)
	}
	render(){
		return (
			<div>
			    <SwipeCards
			        cards={this.state.cards}
			        renderCard={(cardData) => <Card {...cardData} />}
			        handleYup={this.handleLeft}
			        handleNope={this.handleRight}
			      />
			</div>
		)
	}
}

export default Swipe;