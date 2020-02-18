import React from 'react';
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { FadeTransform } from 'react-animation-components';

function RenderDirectoryItem({ avatar, onClick }) {

    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.9) translateY(-10%)'
            }}>
            <Card onClick={() => onClick(avatar.id)} className="bg-success animCard flex-fill" >
                <CardImg style={{ width: "100%", height: "30vw", objectFit: "cover" }} src={avatar.image} alt={avatar.name} />
                <CardTitle>
                    {avatar.name}
                </CardTitle>
                <CardBody>
                    <p>{avatar.description}</p>
                </CardBody>
            </Card>

        </FadeTransform>

    );

}

function AvatarDirectory(props) {
    const FadeIn = styled.div`animation: 7s ${keyframes`${fadeIn}`}`;

    const directory = props.avatars.map(avatar => {
        return (
            <div key={avatar.id} className="col-10 col-sm-6 col-md-3 mb-2 d-flex" >
                <RenderDirectoryItem avatar={avatar} onClick={props.onClick}
                    onBackClick={props.onBackClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <FadeIn><h3 className="homeText">Choose A Character</h3></FadeIn>
            <div className="row ">
                {directory}
            </div>
        </div>
    );
}


export default AvatarDirectory;