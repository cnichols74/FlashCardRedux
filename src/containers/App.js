import React, {Component} from 'react';
import Routes from '../routes';
import Decks from './Decks'

class App extends Component {

    render() {
        return (
            <div className='row'>
                <Decks/>
                {Routes}
            </div>
        );
    }
}

export default App;
