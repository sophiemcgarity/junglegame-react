import React, { Component } from 'react';
import { AVATARS } from '../shared/avatars';
import AvatarDirectory from './AvatarDirectoryComponent';
import AvatarInfo from './AvatarInfoComponent';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avatars: AVATARS,
            selectedAvatar: null
        }

    }

    onAvatarSelect(avatarId) {
        this.setState({ selectedAvatar: avatarId });
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>Jungle Game</h1>
                <p className="aboutGame">A Game For Those Who Seek To Find... A Way To Leave Their World Behind</p>
                <AvatarDirectory avatars={this.state.avatars} onClick={avatarId => this.onAvatarSelect(avatarId)} />
                <AvatarInfo avatars={this.state.avatars.filter(avatar => avatar.id === this.state.selectedAvatar)[0]} />       
            </React.Fragment>
        )
    }
}


export default Home;