import React, { Component } from 'react';
import GamePage from './GamePageComponent';
import { AVATARS } from '../shared/avatars';
import { PAGES } from '../shared/pages';
import Home from './HomeComponent';
import { Switch, Route } from 'react-router-dom';



class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avatars: AVATARS,
            selectedAvatar: null,
            pages: PAGES,
            selectedPage: 0
        }

    }


    /*

    onPageSelect(pageId){
         this.setState({selectedPage: pageId});
    }
    */


    render() {

        return (
            <React.Fragment>
                <Switch>
                    <Route path='/home' render={() => <Home />} />
                    <Route path='/gamepage' render={() => <GamePage pages={this.state.pages} />} />
                </Switch>

                <Home pages={this.state.pages} />
            </React.Fragment>
        )
    }
}
//<GamePage page={this.state.pages.filter(page => page.id === this.state.selectedPage)[0]} /> 


export default Main;