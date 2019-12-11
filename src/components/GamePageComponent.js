import React, { Component } from 'react';
import AvatarDirectory from './AvatarDirectoryComponent';
import AvatarInfo from './AvatarInfoComponent';
import { AVATARS } from '../shared/avatars';
import Background from './BackgroundComponent';
import Story from './StoryComponent';
//import ButtonOne from './ButtonOneComponent';
//import ButtonTwo from './ButtonTwoComponent';


class GamePage extends Component {
    render(){
    return(
        <div>
            <Background />
            <Story />
            {/* <ButtonOne /> */}
            {/* <ButtonTwo /> */}
        </div>
    );
}
}

export default GamePage;