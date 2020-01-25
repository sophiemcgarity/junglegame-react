import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { slideInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';


    function RenderAvatar({avatar, onBackClick}){
        const SlideInLeft = styled.div`animation: 2s ${keyframes`${slideInLeft}`}`;

        
        return(
            <SlideInLeft>
            <div className="row bgrow align-items-center">
                 
                <div className="col-sm-4">
                   
                    <img className="img-fluid" src={avatar.image} alt={avatar.name} />
                </div>
                <div className="col-sm-4 homeText">
                        <h2>{avatar.name}</h2>
                        <p>{avatar.description}</p>
                        <p><strong>Strengths: </strong>{avatar.strengths}</p>
                        <p><strong>Weaknesses: </strong>{avatar.weaknesses}</p>
                </div>
            
                <div className="col-sm-4">
                    
                    <Button className="btn btn-success animBtn btn-lg m-2 text-white" onClick={() => onBackClick()} ><h3>Go Back</h3></Button>
                    
                    <Button className="btn btn-success animBtn btn-lg m-2"><Link className="text-white" to='/gamepage'><h3 >Start</h3></Link></Button>

                </div>
                
            </div>
            </SlideInLeft>
        
        );
    }


    function AvatarInfo(props) {
        if(props.avatar){
            return (
                <div className="container">
                    <div className="row">
                        <RenderAvatar avatar={props.avatar}
                        onBackClick={props.onBackClick}
                        />
                    </div>
                </div>
            );
        }
            return(
                <div>

                </div>
    );
}


export default AvatarInfo;