import React, { Component } from 'react';
import { Button } from 'reactstrap';

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: 'start',
        }
    }

    
    changePage() {
        this.setState({ selectedPage: this.state.pages.id })
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

        
        const renderText = currentPage.map(i => i.story);

        const story = currentPage.map(s => {
            return (
                <div key={s.id}>
                    <div className="storyText">
                        {renderText}
                    </div>
                </div>
            )
        })
        

        const renderBackground = currentPage.map(x => x.image);

        const background = currentPage.map(b => {
            return (
                <div key={b.id}>
                     <img src={renderBackground} alt="bg" className="bg"></img>
                </div>
            )
        })
        
        

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {story}
                        </div>
                        <div className="col">
                            {button}
                        </div>
                        <div className="col">
                            {background}
                        </div>
                    </div>
                </div>
                {console.log(this.props.selectedPage)}
            </React.Fragment>
        );
    }

}

export default GamePage;