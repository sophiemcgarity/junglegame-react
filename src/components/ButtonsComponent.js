
//import React, { Component } from 'react';
//import { Button } from 'reactstrap';
//import { Link } from 'react-router-dom';

/*

class Buttons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: 'start',
        }
      }

      //map the page into a new component
      //create an onClick() event that controls when the page changes
      //change the state once the page changes, keep track of current page with id, or the current page
      //map both buttons to the screen

      changePage() {
        this.setState({ selectedPage: this.props.pages.id})
      }

      render(){

        ///////////////old stuff
        const story = this.props.pages.filter(val => val.id === this.props.pageWithId);
        const renderButton = story.map(i => i.button1);
        //////////////////////
        
        const currentPage = this.props.pages.filter(val => val.id === this.state.selectedPage);
        
        const button = currentPage.map(btn => {
            return(
                <div key={btn.id}>
                    <Button onClick={this.changePage}>{btn.button1}</Button>
                    <Button onClick={this.changePage}>{btn.button2}</Button>
                </div>
            )
        })

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {button}
                        </div>
                    </div>
                </div>
                {console.log(this.state.selectedPage)}
            </React.Fragment>
        )
       
    }
}

export default Buttons;

*/