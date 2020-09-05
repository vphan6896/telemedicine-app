import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import ConferenceRoom from './ConferenceRoom';
import WaitingRoom from './WaitingRoom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/wait">
					<WaitingRoom />
				</Route>
				<Route path="/video">
					<ConferenceRoom />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
