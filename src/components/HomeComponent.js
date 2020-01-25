import React, { Component } from 'react';
import AvatarDirectory from './AvatarDirectoryComponent';
import AvatarInfo from './AvatarInfoComponent';
import Typical from 'react-typical';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

class Home extends Component {
    
   render(){

    const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`}`;
   
        return (
            <React.Fragment>
                <div className="bg text-white p-5">
                    <Bounce><h1 className="homeText m-3">Jungle Game</h1></Bounce>
                    <p className="aboutGame">
                        <Typical loop={3} wrapper='b' steps={['A Game For Those Who Seek To Find... A Way To Leave Their World Behind', 1000]} />
                    </p>
                    <AvatarDirectory avatars={this.props.avatars}  onClick={this.props.onClick}
                    onBackClick={this.props.onClick}
                    />
                    <AvatarInfo avatar={this.props.avatar }
                    onBackClick={this.props.onBackClick}/>
                     
                </div>
               
            </React.Fragment>
        )
    }
}


export default Home;