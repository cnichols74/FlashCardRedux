import React, {Component} from 'react';
import Routes from '../routes';
import Cards from './Cards';
//import Decks from './Decks'

class App extends Component {

    render() {
        return (
            <div className='row'>
                {Routes}
            </div>
        );
    }
}

export default App;
