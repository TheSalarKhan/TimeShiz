import React, { Component } from 'react';
import Activity from './Activity'

class ActivitiesList extends Component {

  constructor() {
    super();
  }
  /*
    this.props.activities
    [
      {
        name: '',
        description: ''
      },
      ..
    ]
  */

  activityClicked(activity) {
    this.props.activityClicked(activity);
  }

  render() {
    let divStyle= {
      borderLeft: 'solid black 2px',
      borderRight: 'solid black 2px'
    };
    let thisComponent = this;
    return (
      <div className="col-md-4" style={divStyle}>
      {this.props.activities.map(function(activity){
        return <Activity activity={activity} onClick={thisComponent.activityClicked.bind(thisComponent)} key={activity.name}/>
      })}
      </div>
    );
  }
}



export default ActivitiesList;
