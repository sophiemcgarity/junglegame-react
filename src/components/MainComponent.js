import React, { Component } from 'react';
import AvatarDirectory from './AvatarDirectoryComponent';
import AvatarInfo from './AvatarInfoComponent';
import Background from './BackgroundComponent';
import GamePage from './GamePageComponent';
import { AVATARS } from '../shared/avatars';
import { PAGES } from '../shared/pages';
import Buttons from './ButtonsComponent';
import Story from './StoryComponent';
import { Switch, Route} from 'react-router-dom';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';


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

    /*

    onPageSelect(pageId){
         this.setState({selectedPage: pageId});
    }
    */
    

    render() {

        return (
            <React.Fragment>
                <h1>Jungle Game</h1>
                <p className="aboutGame">A Game For Those Who Seek To Find... A Way To Leave Their World Behind</p>
                <AvatarDirectory avatars={this.state.avatars} onClick={avatarId => this.onAvatarSelect(avatarId)} />
                <AvatarInfo avatar={this.state.avatars.filter(avatar => avatar.id === this.state.selectedAvatar)[0]} />
                
                <GamePage pages={this.state.pages}/>
                
                
                <Nav>
                    <NavItem>
                        <NavLink to="/gamepage">
                            <Button>Start</Button>
                        </NavLink>
                    </NavItem>
                </Nav>

               

            </React.Fragment>
        )
    }
}
//<GamePage page={this.state.pages.filter(page => page.id === this.state.selectedPage)[0]} /> 


export default Main;