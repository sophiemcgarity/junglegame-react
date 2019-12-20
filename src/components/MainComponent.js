import React, { Component } from 'react';
import GamePage from './GamePageComponent';
import { AVATARS } from '../shared/avatars';
import { PAGES } from '../shared/pages';
import Home from './HomeComponent';
import SelectedAvatarDisplay from './SelectedAvatarDisplayComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



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

    onAvatarSelect(avatarId) {
        this.setState({ selectedAvatar: avatarId });
      }


    // onPageSelect(pageId){
    //      this.setState({selectedPage: pageId});
    // }
    // */


    render() {

        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/home' render={() => <Home pages={this.state.pages} avatars={this.state.avatars} selectedAvatar={this.state.selectedAvatar} 
                    onClick={avatarId => this.onAvatarSelect(avatarId)} avatar={this.state.avatars.filter(avatar => avatar.id === this.state.selectedAvatar)[0]}
                    />} />

                    <Route exact path='/gamepage' render={() => <GamePage pages={this.state.pages} avatars={this.state.avatars} selectedAvatar={this.state.selectedAvatar}/>} />

                    <Redirect to='/home' render={() => <Home pages={this.state.pages}/>} />
                </Switch>  
            </React.Fragment>
        )
    }
}



export default Main;