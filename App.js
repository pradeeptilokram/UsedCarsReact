import { Component } from 'react';
import React, {  }  from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SimpleTabs from './tab'

//Loads Components


class App extends Component{

render(){
  
  
  
  return(<div className="App">
  <h1 align='left' color='Blue'> Used American Cars</h1>
  <p></p>
  <SimpleTabs />
</div>);
}
}

export default App;
