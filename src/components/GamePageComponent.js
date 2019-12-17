import React, { Component } from 'react';
import Background from './BackgroundComponent';
import Story from './StoryComponent';
import Buttons from './ButtonsComponent';
import { Container, Row, Col } from 'reactstrap';



class GamePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Background pages={this.props.pages} />
                <Container>
                    <Row>
                        <Col xs="6">
                            <Story pages={this.props.pages} />
                        </Col>
                        <Col>
                            <Buttons pages={this.props.pages} />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default GamePage;