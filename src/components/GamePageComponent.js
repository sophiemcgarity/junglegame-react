import React, { Component } from 'react';
//import Background from './BackgroundComponent';
//import Story from './StoryComponent';
//import Buttons from './ButtonsComponent';
//import ChosenAvatarName from './ChosenAvatarNameComponent';
//import SelectedAvatarDisplay from './SelectedAvatarDisplayComponent';
import { Container, Row, Col, Button } from 'reactstrap';


class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: 'start',
        };
    }

    onPageChange(page) {
        this.setState({selectedPage: page});
    }


    render() {
        const currentPage = this.props.pages.filter(page => page.id == this.state.selectedPage)[0];


        const yourAvatar= this.props.avatars.filter(avatar => avatar.id === this.props.selectedAvatar)[0];

        const yourAvatarImage = yourAvatar.image;
        const yourAvatarName = yourAvatar.name;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img className="imageCorner" src={yourAvatarImage} />
                        <p className="nameText">{yourAvatarName}</p>
                    </div>
                </div>
                <p className="storyText">{currentPage.story}</p>
                <div className="row">
                    <div className="col">
                        <Button onClick={() => this.onPageChange(currentPage.button1Id)}>{currentPage.button1}</Button>
                    </div>
                    <div className="col">
                        <Button onClick={() => this.onPageChange(currentPage.button2Id)}>{currentPage.button2}</Button>
                    </div>
                </div>
                
                <img src={currentPage.image} className="bg" />
            </div>
        );
    }

}

export default GamePage;