import React, { Component } from 'react';
import Background from './BackgroundComponent';
import Story from './StoryComponent';
import Buttons from './ButtonsComponent';



class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: 'start',
        }
    }

    changePage() {
        this.setState({ selectedPage: this.props.pages.id })
    }

    render() {
        const currentPage = this.props.pages.filter(val => val.id === this.state.selectedPage);

        const button = currentPage.map(btn => {
            return (
                <div key={btn.id}>
                    <Button onClick={this.changePage}>{btn.button1}</Button>
                    <Button onClick={this.changePage}>{btn.button2}</Button>
                </div>
            )
        })

        const story = currentPage.map(s => {
            return (
                <div key={s.id}>
                    <div className="storyText">
                        {}
                    </div>
                </div>
            )
        })

        return (
            <React.Fragment>
                <Background pages={this.props.pages} />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {button}
                        </div>
                        <div className="col">
                            {}
                        </div>
                    </div>
                </div>
                {console.log(this.state.selectedPage)}
            </React.Fragment>
        );
    }

}

export default GamePage;