import React, { Component } from 'react';
import ActivitiesList from './Components/ActivitiesList'

class App extends Component {
  constructor() {
    super();
    let activities = [
      {
        name: 'Activity1',
        description: 'This is act1',
        totalTime: 0,
        startedAt: -1 // timestamp of the start event
      },
      {
        name: 'Activity2',
        description: 'This is act2',
        totalTime: 0,
        startedAt: -1 // timestamp of the start event
      },
      {
        name: 'Activity3',
        description: 'This is act3',
        totalTime: 0,
        startedAt: -1 // timestamp of the start event
      },
    ];
    this.state = {
      activities: activities,
      currentActivity: null
    }
  }

  stopActivity(activity, timeNow) {
    if(activity && activity.startedAt !== -1) {
      let totalTimeSpent = timeNow - activity.startedAt;
      activity.totalTime += totalTimeSpent;
      activity.startedAt = -1;
    }
  }

  startActivity(activity, timeNow) {
    if(activity) {
      activity.startedAt = timeNow;
    }
  }

  activityClicked(activity) {
    let timeNow = (new Date()).getTime();
    let state = this.state;

    // Stop recording time for the currentActivity.
    this.stopActivity(state.currentActivity, timeNow);
    let wasCurrentActivity = state.currentActivity;
    state.currentActivity = null;
    // If the clicked activity is different
    // from that which is current, only then
    // start the activity clicked and make it current.
    if(activity !== wasCurrentActivity) {
      this.startActivity(activity, timeNow);
      state.currentActivity = activity;
    }

    this.setState(state);
  }

  render() {
    return (
      <div className="container col-md-12">
        <ActivitiesList activities={this.state.activities} activityClicked={this.activityClicked.bind(this)}/>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
