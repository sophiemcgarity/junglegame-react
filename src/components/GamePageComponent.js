import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Sound from 'react-sound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ToggleShowButton({currentPage, onPageChange}) {
    console.log(currentPage)
    if (!currentPage.button2) {
        console.log('failed', currentPage.button2)
        return <div />;
    } else {
        console.log(currentPage.button2)
        return <Button onClick={() => onPageChange(currentPage.button2Id)}>{currentPage.button2}</Button>;
    }

};

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: 'start',
        };
    }

    onPageChange(page) {
        this.setState({ selectedPage: page });
    }

    render() {
        const currentPage = this.props.pages.filter(page => page.id === this.state.selectedPage)[0];
        const yourAvatar = this.props.avatars.filter(avatar => avatar.id === this.props.selectedAvatar)[0];

        const yourAvatarImage = yourAvatar.image;
        const yourAvatarName = yourAvatar.name;


        return (
            <React.Fragment>
                <TransitionGroup>
                    <CSSTransition
                        key={this.state.selectedPage}
                        timeout={1000}
                        classNames="pageout"
                    >
                        <div className="container page">
                            <img src={currentPage.image} className="bg" alt="Background" />
                            <div className="row">
                                <div className="col-3">
                                    <img className="imageCorner" src={yourAvatarImage} alt="Avatar" />
                                    <p className="nameText">{yourAvatarName}</p>
                                </div>
                                <div className="col">
                                    <Button href="/home" className="btn-success btn-lg text-white animBtn homeBtn">Reset Avatar</Button>
                                </div>
                            </div>
                            <p className="storyText">{currentPage.story}</p>
                            <div className="row">
                                <div className="col btn1">
                                    <Button className="btn-lg" onClick={() => this.onPageChange(currentPage.button1Id)}>{currentPage.button1}</Button>
                                </div>
                                <div className="col btn2">
                                 {currentPage.button2Id && <Button className="btn-lg" onClick={() => this.onPageChange(currentPage.button2Id)}>{currentPage.button2}</Button> }
                                  {/* <ToggleShowButton currentPage={currentPage} onPageChange={this.onPageChange}/> */}
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
               {/*  <Sound
                    url="/assets/audio/jungle.wav"
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={1}
                /> */}

            </React.Fragment>
        );
    }

}

export default GamePage;