import React, { Component } from 'react';
import Background from './BackgroundComponent';
import Story from './StoryComponent';
import Buttons from './ButtonsComponent';



class GamePage extends Component {
    constructor(props) {
        super(props);
    }
    render(){
    return(
        <React.Fragment>
               
            
            <Background />
            <Story pages={this.props.pages}/> 
            <Buttons pages={this.props.pages} />
            
        </React.Fragment>
    );
}
}

export default GamePage;