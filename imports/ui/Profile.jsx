import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Achievements from "./Achievements.jsx";
import PredictionStats from "./Prediction-stats.jsx";
import Gambler from "./Gambler.jsx";
import ButtonAppBar from "./ButtonAppBar.jsx";
import Landing from "./Landing.jsx";
import Registration from "./Registration.jsx";
import Bet from "./Bet.jsx";
import LoginTab from "./Login-tab.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Redirect } from "react-router-dom";
import {withRouter} from "react-router-dom";

import Bio from "./Bio.jsx";
import MenuBar from "./MenuBar.jsx";



class Profile extends Component{
render(){
	return (
		<div className="container-fluid">
          <div className="row">
            <div className="col s12 12"><MenuBar /></div>
            <div className=" col s12 m7"><Gambler /></div>
            <div className="col s12 m5"><PredictionStats /></div>
          </div>
           <div className="col s12 m9"><Bio/></div>
           <div className="achievements"><Achievements /></div>

        </div>
          );

      }

  }

  export default withRouter(Profile);