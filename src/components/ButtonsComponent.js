import React, { Component } from 'react';
import { Button } from 'reactstrap';
//import { Link } from 'react-router-dom';


class Buttons extends Component {
    constructor(props) {
        super(props);
      }
    render() {

        const story = this.props.pages.filter(val => val.id === "start");
        
        const renderButton = story.map(i => i.button1);

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Button>{renderButton}</Button>
                        </div>
                    </div>
                </div>               
            </React.Fragment>
        )
    }
}

export default Buttons;