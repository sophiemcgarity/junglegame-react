import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import AvatarInfo from './AvatarInfoComponent';
//import { AVATARS } from '../shared/avatars';

function RenderDirectoryItem({avatar, onClick}){
    return (
        <Card onClick={()=> onClick(avatar.id)} className="bg-success flex-fill" >
            <CardImg style={{width: "100%", height: "30vw", objectFit: "cover"}} src={avatar.image} alt={avatar.name} />
                <CardTitle>
                    {avatar.name}
                </CardTitle>
                    <CardBody>
                        <p>{avatar.description}</p>
                    </CardBody>
        </Card>

    );

}

function AvatarDirectory(props) {
    
        const directory = props.avatars.map(avatar => {
            return (
                <div  key={avatar.id} className="col-10 col-sm-6 col-md-3 mb-2 d-flex">
                    <RenderDirectoryItem avatar={avatar} onClick={props.onClick} />
                </div>
            );
        });
        return (
            <div className="container">
                <h3 className="homeText">Choose A Character</h3>
                <div className="row">
                        {directory}
                </div>
                {/* <div className="row ">
                    <div className="col-sm-4">
                        {this.renderSelectedAvatar(this.state.selectedAvatar)}

                    </div>

                </div> */}
               
                
                
            </div>
        );
    }


export default AvatarDirectory;