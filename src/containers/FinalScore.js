import React, { Component } from 'react';
import { setScore } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class FinalScore extends Component {
    renderHomeButton() {

        return <Link to='/'><button type='Submit' className='btn btn-primary' onClick={ event => this.resetScore() }>Reset Score</button></Link>;
    }
    resetScore() {

        this.props.setScore( 0 );
    }
    render() {

        return (
            <div className="justify-content-center centerList ">
                <h1 className="centerList finalScore">Final Score:&nbsp;{this.props.currentScore}</h1>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        { this.renderHomeButton() }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentScore: state.currentScore
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setScore: setScore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalScore);