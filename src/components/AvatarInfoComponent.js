import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderAvatar({avatar}){
        return(
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
                    <Button className="btn btn-success btn-lg m-2"><Link className="text-white" to='/home'><h3>Go Back</h3></Link></Button>
                    <Button className="btn btn-success btn-lg m-2"><Link className="text-white" to='/gamepage'><h3 >Start</h3></Link></Button>
                    
                </div>
            </div>
        
        );
    }

    function RenderAvatarData({avatar}){
        if(avatar){
        return(

            <div className="col-md-5 m-1">
                <Card className="bg-success">
                    <CardTitle>
                        <h2>{avatar.name}</h2>
                    </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>{avatar.description}</p>
                                <p>strengths: {avatar.strengths}</p>
                                <p>weaknesses: {avatar.weaknesses}</p>
                                </CardText>
                                <button className="btn-lg btn-primary m-3">Confirm</button>
                        </CardBody>
                    </Card>
            </div>
        );
    } return(
        <div />
    );
    }


    function AvatarInfo(props) {
        if(props.avatar){
            return (
                <div className="container">
                    <div className="row">
                        <RenderAvatar avatar={props.avatar}/>
                        {/* <RenderAvatarData avatar={props.avatar}/> */}
                    </div>
                </div>
            );
        }
            return(
                <div>No avatar selected</div>
    );
}


export default AvatarInfo;