import React, { Component } from 'react';
import AvatarDirectory from './AvatarDirectoryComponent';
import AvatarInfo from './AvatarInfoComponent';
import Background from './BackgroundComponent';
import { AVATARS } from '../shared/avatars';
import { PAGES } from '../shared/pages';
import GamePage from './GamePageComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state ={
            avatars: AVATARS,
            selectedAvatar: null,
            pages: PAGES,
            selectedPage: 0 
           
        };
    }

    onAvatarSelect(avatarId){
        this.setState({selectedAvatar: avatarId});
    }

    // onPageSelect(pageId){
    //     this.setState({selectedPage: pageId});
    // }



    render() {
        return (

            <div>
                console.log("page: " + this.state.pages.filter(page => page.id === this.state.selectedPage)[0]});
                <Background />
                <h1>Jungle Game</h1>
                
                <p className="aboutGame">A Game For Those Who Seek To Find... A Way To Leave Their World Behind</p>
                <AvatarDirectory  avatars={this.state.avatars} onClick={avatarId => this.onAvatarSelect(avatarId)}/>
                <AvatarInfo avatar={this.state.avatars.filter(avatar => avatar.id === this.state.selectedAvatar)[0]} />
                {/* <GamePage page={this.state.pages.filter(page => page.id === this.state.selectedPage)[0]} /> */}
                <GamePage />
                
                
            </div>
        );
    }
}

export default Main;