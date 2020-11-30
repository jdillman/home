import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import View from './BaseView';

class HomeView extends Component {
  componentDidMount() {}

  render() {
    return (
      <View>
        <Paper>
          <a href="mailto:jdd619@gmail.com">jdd619@gmail.com</a>
          <a href="https://www.linkedin.com/in/jdillman/">LinkedIn</a>
          <a href="https://github.com/jdillman">GitHub</a>
        </Paper>
      </View>
    );
  }
}

export default HomeView;
