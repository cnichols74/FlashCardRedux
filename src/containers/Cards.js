import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Flashcard from './Card';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {cardIndex: 0, shuffledCards: []};
        this.getNextCard = this.getNextCard.bind(this);
    }

    getNextCard() {

        if (this.state.cardIndex === this.props.activeDeck.cards.length - 1) {
            // Show Final Score after finished.
            this.props.history.push("/finalscore");
        } else {
            // Add one to the index and go to the next card.
            let nextCard = this.state.cardIndex + 1;
            this.setState({cardIndex: nextCard});
        }
    }

    render() {
        return (
            <div className='row justify-content-center centerList score-bg'>
                <div className='col-md-12'>
                    <h4 className='text-center'>Score: {this.props.currentScore}</h4>
                </div>
                <Flashcard currentCard={this.props.activeDeck.cards[this.state.cardIndex]}
                           getNextCard={this.getNextCard}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeDeck: state.decks[state.activeDeckId],
        currentScore: state.currentScore
    };
}

export default connect(mapStateToProps)(withRouter(Cards));
