import React, { Component } from 'react';
import GamePage from './GamePageComponent';
import { AVATARS } from '../shared/avatars';
import { PAGES } from '../shared/pages';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
      
    componentDidUpdate(){
        window.scrollBy(0, 2000);
    }

    onAvatarSelect(avatarId) {
        this.setState({ selectedAvatar: avatarId });
    }


      onAvatarReset() {
        this.setState({ selectedAvatar: null });
        
      }

    render() {
        
        return (
            <Route render={({location}) => (
                <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={1000}
                    classNames='fade'
                >  
                    <Switch location={location}>

                        <Route exact path='/home' render={() => <Home pages={this.state.pages} avatars={this.state.avatars} selectedAvatar={this.state.selectedAvatar}
                            onClick={avatarId => this.onAvatarSelect(avatarId)} onBackClick={()=> this.onAvatarReset()} avatar={this.state.avatars.filter(avatar => avatar.id === this.state.selectedAvatar)[0]}
                        />} />

                        <Route exact path='/gamepage' render={() => <GamePage pages={this.state.pages} avatars={this.state.avatars} selectedAvatar={this.state.selectedAvatar} />} />

                        <Redirect to='/home' render={() => <Home pages={this.state.pages} />} />

                    </Switch>
                </CSSTransition>                      
            </TransitionGroup>
            )} />
        );

    }
}

export default Main;