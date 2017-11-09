import React, { Component } from 'react';

class Activity extends Component {
  activityClicked() {
    this.props.onClick(this.props.activity)
  }

  render() {
    let style = {
      borderBottom: 'solid black 2px'
    };
    let activity = this.props.activity;
    let active = (activity.startedAt !== -1) ? "*" : ""
    return(
      <a href="javascript:void(0)" onClick={this.activityClicked.bind(this)}>
        <div style={style}>
          <strong>{ activity.name }</strong>
          <p>{ activity.description }</p>

          <div>
            <p className="col-md-10"> { activity.totalTime / 1000.0 } </p>
            <p className="col-md-2"> { active } </p>
          </div>
        </div>
      </a>
    );
  }
}

export default Activity;
