import React, { Component } from 'react';
//import { Switch, Route, Redirect } from 'react-router-dom';
import { PAGES } from '../shared/pages';
import RenderButtons from './ButtonsComponent';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            pages: PAGES
        };
    }

    renderSelectedButton(button) {
        if (button) {
            return (
                <RenderButtons />
            )
        }

        return <div />;
    }
    
    
    render() {
        
        return (
            <div>
                <h2>Jungle Game</h2>
            </div>
        )

    }
}

export default Main;