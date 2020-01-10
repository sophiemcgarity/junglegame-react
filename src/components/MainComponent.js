import React, { Component } from 'react';
import GamePage from './GamePageComponent';
import { AVATARS } from '../shared/avatars';
import { PAGES } from '../shared/pages';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avatars: AVATARS,
            selectedAvatar: null,
            pages: PAGES,
            selectedPage: ''
        }
    }


    render() {
        
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' render={() => <Home pages={this.state.pages}/>} />

                    <Route exact path='/gamepage' render={() => <GamePage pages={this.state.pages}/>} />

                    <Redirect to='/home' render={() => <Home pages={this.state.pages}/>} />
                </Switch>  
            </React.Fragment>
        )
    }
}

export default Main;