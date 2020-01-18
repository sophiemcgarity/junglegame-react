import React, { Component } from 'react';
import { AVATARS } from '../shared/avatars';
import AvatarDirectory from './AvatarDirectoryComponent';
import AvatarInfo from './AvatarInfoComponent';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    
   render(){
        return (
            <React.Fragment>
                <div className="bg text-white p-5">
                    <h1 className="homeText">Jungle Game</h1>
                    <p className="aboutGame">A Game For Those Who Seek To Find... A Way To Leave Their World Behind</p>
                    <AvatarDirectory avatars={this.props.avatars}  onClick={this.props.onClick}/>
                    <AvatarInfo avatar={this.props.avatar}/>
                     
                </div>   
            </React.Fragment>
        )
    }
}


export default Home;