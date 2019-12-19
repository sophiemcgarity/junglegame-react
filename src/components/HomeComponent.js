import React, { Component } from 'react';
import { AVATARS } from '../shared/avatars';
import AvatarDirectory from './AvatarDirectoryComponent';
import AvatarInfo from './AvatarInfoComponent';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {

     constructor(props){
        super(props);
        this.state = {
            selectedAvatar: null
        }; 
    }

    onAvatarSelect(avatarId) {
        this.setState({ selectedAvatar: avatarId });
      }

    
    
   render(){
        return (
            <React.Fragment>
                <div className="bg text-white p-5">
                    <h1 className="homeText">Jungle Game</h1>
                    <p className="aboutGame">A Game For Those Who Seek To Find... A Way To Leave Their World Behind</p>
                    <AvatarDirectory avatars={this.props.avatars} onClick={avatarId => this.onAvatarSelect(avatarId)} />
                    <AvatarInfo avatar={this.props.avatars.filter(avatar => avatar.id === this.state.selectedAvatar)[0]}/>
                    <Button className="btn btn-success btn-xl p-4"><Link to='/gamepage'><h3 >Start</h3></Link></Button> 
                </div>   
            </React.Fragment>
        )
    }
}


export default Home;