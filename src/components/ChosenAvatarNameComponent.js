import React, { Component } from 'react';

class ChosenAvatarName extends Component{
  constructor(props) {
    super(props);
  }
  render() {

    const name = this.props.avatars.filter(val => val.id === this.props.selectedAvatar);
    const renderName = name.map(i => i.name);

    
    return (
      <React.Fragment>
            <p>{renderName}</p>  
      </React.Fragment>
    )
  }
}

export default ChosenAvatarName;