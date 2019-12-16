import React, { Component } from 'react';
import AvatarDirectory from './AvatarDirectoryComponent';
import AvatarInfo from './AvatarInfoComponent';
import Background from './BackgroundComponent';
import GamePage from './GamePageComponent';
import { AVATARS } from '../shared/avatars';
import { PAGES } from '../shared/pages';
import Buttons from './ButtonsComponent';
//import { Switch, Route, Redirect } from 'react-router-dom';

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
    //     this.setState({selectedPage: pageId});
    // }
    

    render() {

        return (
            <React.Fragment>
                
                <Background />
                <h1>Jungle Game</h1>
                <p className="aboutGame">A Game For Those Who Seek To Find... A Way To Leave Their World Behind</p>
                <AvatarDirectory avatars={this.state.avatars} onClick={avatarId => this.onAvatarSelect(avatarId)} />
                <AvatarInfo avatar={this.state.avatars.filter(avatar => avatar.id === this.state.selectedAvatar)[0]} />
                {/* <GamePage page={this.state.pages.filter(page => page.id === this.state.selectedPage)[0]} /> */}
                <GamePage />
                <Buttons pages={this.state.pages}/>
                
            </React.Fragment>
        )
    }
}



export default Main;