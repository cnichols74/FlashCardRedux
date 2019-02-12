import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from './containers/Decks';
import Flashcard from './containers/Cards';
import FinalScore from './containers/FinalScore';

export default (

	<Switch>
		<Route path='/' exact component={ Flashcard } />
		<Route path='/flashcards' exact component={ Categories } />
		<Route path='/finalscore' exact component={ FinalScore } />
	</Switch>
);