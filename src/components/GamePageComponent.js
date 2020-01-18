import React, { Component } from 'react';
import { Button } from 'reactstrap';

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: "river",
        };

        this.changePage = this.changePage.bind(this);
        this.changePageBtn1 = this.changePageBtn1.bind(this);
        this.changePageBtn2 = this.changePageBtn2.bind(this);
    }

    
    changePage() {
        this.setState(state => ({ 
            selectedPage: state.pages.id
        }));
    }

    changePageBtn1 () {
        this.setState({
            selectedPage: this.state.pages.button1Id
        });
    }

    changePageBtn2(){
        this.setState({
            selectedPage: this.state.pages.button2Id
        });
    }

    render() {
        
        const currentPage = this.props.pages.filter(val => val.id === this.state.selectedPage);

        //use button1Id and button2Id so when clicked takes the user to the correct next page
        //use button1Id or button2Id to find the next page to render

        const button = currentPage.map(btn => {
            return (
                <div key={btn.id}>
                    <Button key={this.props.pages.button1Id} onClick={this.changePageBtn1}>{btn.button1}</Button>
                    <Button key={this.props.pages.button2Id} onClick={this.changePageBtn2}>{btn.button2}</Button>
                </div>
            )
        })

        const renderStory = currentPage.map(i => i.story);

        const story = currentPage.map(s => {
            return (
                <div key={s.id}>
                    <div className="storyText">
                        {renderStory}
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