'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import timer from 'react-native-timer';
//import ProgressCircle from 'react-native-progress-circle';
import PercentageCircle from 'react-native-percentage-circle';
import Sound from 'react-native-sound';

const timerDuration = 20; // total time in seconds
const initialTime = '00:20'; // initial timer display
const timerInterval = null;
const startTime = null;
const timeLeft = 0;
const minutes = 0;
const seconds = 0;

const whoosh = new Sound('music.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
});

class timerPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      timeRemaining: initialTime,
      isStarted: false,
      fill: 100,
    }
  }

	render() {
		return (
      <View style={styles.container}>

        <PercentageCircle 
          radius={70} 
          percent={this.state.fill} 
          color={"#3498db"}
          borderWidth={5}
        >
          <Text style={{ fontSize: 18 }}>{this.state.timeRemaining}</Text>
        </PercentageCircle>

        <Button
          style={styles.button}
          onPress={this.handleClick.bind(this)}>
          { this.state.isStarted ? "stop" : "start" }
        </Button>

      </View>
    );
	}

  handleClick() {
    if (this.state.isStarted) {
      this.stopCountdown();
    } else {
      this.startCountdown();
    }
  }

  timer() {
    timeLeft = timerDuration - (((Date.now() - startTime)/1000) | 0 );
    
    minutes = (timeLeft / 60) | 0; 
    seconds = (timeLeft % 60) | 0; 

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if ( timeLeft > -1 && this.state.isStarted == true) {
      this.setState({
        timeRemaining: minutes + ':' + seconds,
        fill: timeLeft / timerDuration *100
      });
    } else {
      this.stopCountdown();
    }
  }

  startCountdown() {
    startTime = Date.now();
    timerInterval = timer.setInterval('timerInterval', this.timer.bind(this), 1000); 
    //timer() is executed every 1000 milliseconds. returns an Interval ID
    this.setState({
      isStarted: true
    });
  }

  stopCountdown() {
    timer.clearInterval(timerInterval);
    this.setState({
      timeRemaining: initialTime,
      isStarted: false,
      fill: 100
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50
  },
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 72,
    left: 56,
    width: 90,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: "100"
  },
  button: {
    backgroundColor: 'white',
    color: 'tomato',
    fontSize: 40,
    padding: 10,
    textAlign: 'center'
  },
});

module.exports = timerPage;