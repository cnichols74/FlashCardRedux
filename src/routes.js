import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/App';
import FlashcardList from './containers/Cards';
import FinalScore from './containers/FinalScore';

export default (

	<Switch>
		<Route path='/' exact component={ App } />
		<Route path='/flashcards' component={ FlashcardList } />
		<Route path='/finalscore' component={ FinalScore } />
	</Switch>
);