import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
//import { AVATARS } from '../shared/avatars';



class AvatarDirectory extends Component {

    render() {
        const directory = this.props.avatars.map(avatar => {
            return (
                <div key={avatar.id} style={{border: "solid  #09d3ac 2px"}} className="col-sm m-1">
                    <Card onClick={() => this.props.onClick(avatar.id)}>
                        <CardImg width="30px" src={avatar.image} alt={avatar.name} />
                
                            <CardTitle>
                                {avatar.name}
                            </CardTitle>
                                <CardBody><p>{avatar.description}</p></CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <h3>Choose A Character</h3>
                <div className="row">
                        {directory}
                </div>
                
                
            </div>
        );
    }
}

export default AvatarDirectory;