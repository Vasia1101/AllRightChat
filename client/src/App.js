import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinNow from './components/JoinNow';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Route path='/' exact component={JoinNow} />
        <Route path='/chat' component ={Chat} />
    </Router>
);

export default App;