import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import _ from "underscore";
import {setActiveDeck, setScore} from "../actions";

class Decks extends Component {
    renderDecks() {
        return _.map(this.props.decks, deck => {
            return (

                <div className='list-group text-center' key={deck.deck + '-list'}>
                    <button
                        key={deck.deck}
                        onClick={() => {
                            this.props.setScore(0);
                            this.props.selectDeck(deck.id);
                            this.props.history.push('/flashcards');
                        }}
                        className='list-group-item list-group-item-primary'>
                        <b>{deck.deck}</b>
                    </button>
                </div>
            )
        });
    }

    render() {
        return <div className="justify-content-center centerList">{this.renderDecks()}</div>


    }
}

const mapStateToProps = state => ({
    decks: state.decks
});

const mapDispatchToProps = dispatch => ({
    selectDeck: id => dispatch(setActiveDeck(id)),
    setScore: newScore => dispatch(setScore(newScore))

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Decks));
