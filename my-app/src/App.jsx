import React from 'react';
import './App.css';
import {Header} from './Main/Header';
import {Main} from './Main/Main';


class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
