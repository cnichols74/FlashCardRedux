import React, {Component} from 'react';
import {setScore} from '../actions';
import {connect} from 'react-redux';

class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {isFlipped: false};
    }

    showBack() {
        this.setState({isFlipped: true});
        this.myInput.setAttribute("checked", this.state.isFlipped);
    }

    showFront() {
        this.setState({isFlipped: false});
        this.myInput.removeAttribute("checked");
    }

    addScore() {
        let newScore = this.props.currentScore + 1;
        this.props.setScore(newScore);
        this.showFront();
        this.props.getNextCard();
    }

    render() {

        return (
            <div className="flip-card justify-content-center centerList">
                <input type="checkbox" ref={input => {
                    this.myInput = input;
                }} style={{display: "none"}}/>
                <div className="flip-card-inner">
                    <div className="flip-card-front" onClick={() => this.showBack()}>
                        {this.props.currentCard['question']}
                    </div>
                    <div className="flip-card-back" onClick={() => this.showFront()}>
                        {this.props.currentCard['answer']}
                    </div>
                </div>
                {this.state.isFlipped
                    ?
                    <div className='bottom-buttons'>
                        <button className='btn btn-default incorrect-button' onClick={() => {
                            this.showFront();
                            this.props.getNextCard();
                        }}>
                            I was wrong!
                        </button>
                        <button className='btn btn-default correct-button' onClick={() => this.addScore()}>I was right!
                        </button>
                    </div>
                    : null
                }
            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        currentScore: state.currentScore
    };
}

const mapDispatchToProps = dispatch => ({
    setScore: newScore => dispatch(setScore(newScore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

