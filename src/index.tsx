import React from 'react';
import ReactDOM from 'react-dom';

import Main from './pages/main';

import './index.css';

const App: React.FC = () => (
    <div className="app">
        <Main/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
