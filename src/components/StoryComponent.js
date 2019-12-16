import React, { Component } from 'react';


class Story extends Component {
    constructor(props) {
        super(props);
      }

    render() {

        const story = this.props.pages.filter(val => val.id === "start");
        const renderText = story.map(i => i.story);

        return (
            <div className="container" >
                <div className="row align-items-center">
                    <div className="col-3 align-item-center" style={{ border: "2px green solid" }}>
                        {renderText}
                    </div>
                </div>
            </div>

        );
    }

}

export default Story;