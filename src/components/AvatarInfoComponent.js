import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderAvatar({avatar}){
        return(
            <div className="col-md-5 m-1">
                <Card className="bg-success">
                    <CardImg width="30px" height="100%" src={avatar.image} alt={avatar.name} />
                    <CardTitle>
                        {console.log("clicked")}
                        <h2>{avatar.name}</h2>
                    </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>{avatar.description}</p>
                                <p><strong>strengths: </strong> {avatar.strengths}</p>
                                <p><strong>weaknesses: </strong> {avatar.weaknesses}</p>
                                </CardText>
                                <button className="btn-lg btn-primary m-3">Confirm</button>
                        </CardBody>
                </Card>
            </div>
        );
    }

    function RenderAvatarData({avatar}){
        if(avatar){
        return(

            <div className="col-md-5 m-1">
                <Card className="bg-success">
                    <CardTitle>
                        {console.log("clicked")}
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
                        <RenderAvatarData avatar={props.avatar}/>
                    </div>
                </div>
            );
        }
            return(
                <div>No avatar selected</div>
    );
}


export default AvatarInfo;