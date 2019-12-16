import React, { Component } from 'react';
//import AvatarDirectory from './AvatarDirectoryComponent';
//import AvatarInfo from './AvatarInfoComponent';
//import { AVATARS } from '../shared/avatars';
import Background from './BackgroundComponent';
import Story from './StoryComponent';
//import Buttons from './ButtonsComponent';



class GamePage extends Component {
    render(){
    return(
        <div>
            <Background />
            <Story />
            
        </div>
    );
}
}

export default GamePage;