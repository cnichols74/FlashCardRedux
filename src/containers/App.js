import React, {Component} from 'react';
import Routes from '../routes';

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