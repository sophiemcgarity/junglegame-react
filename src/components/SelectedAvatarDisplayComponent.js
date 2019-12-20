import React, { Component } from 'react';

class SelectedAvatarDisplay extends Component{
  constructor(props) {
    super(props);
  }
  render() {

    const name = this.props.avatars.filter(val => val.id === this.props.selectedAvatar);
    const renderName = name.map(i => i.name);

    const pic = this.props.avatars.filter(val => val.id === this.props.selectedAvatar);
    const renderPic = pic.map(i => i.image);

    return (
      <React.Fragment>
          <div>
            <img src={renderPic} alt="pic" className="rounded-circle" style={{height: "100px", width: "85px", border: "solid white 2px"}}></img>
            <h4 className="storyText aboutGame align-text-middle mt-2">{renderName}</h4>  
          </div>
          
          
      </React.Fragment>
    )
  }
}

export default SelectedAvatarDisplay;