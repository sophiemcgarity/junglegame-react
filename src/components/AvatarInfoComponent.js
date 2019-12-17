import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class AvatarInfo extends Component {
    constructor(props) {
        super(props);
    }


    renderAvatar(avatar){
        return(
            <div className="col-md-5 m-1">
                <Card onClick={() => this.onAvatarSelect(avatar)}>
                    <CardImg width="30px" height="100%" src={avatar.image} alt={avatar.name} />
                </Card>
            </div>
        );
    }

    renderAvatarData(avatar){
        if(avatar){
        return(

            <div className="col-md-5 m-1">
                <Card onClick={() => this.onAvatarSelect(avatar)}>
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


    render() {
        if(this.props.avatar){
            return (
                <div className="container">
                    <div className="row">
                        {this.renderAvatar(this.props.avatar)}
                        {this.renderAvatarData(this.props.avatar)}
                    </div>
                </div>
            );
        }
            return(
                <div />
    );
}
}

export default AvatarInfo;