import React, {Component} from 'react';

//import background from '../../../public/images/login_background.jpg';
import logo from "../../../public/images/logo.png"

class Main extends Component {
	render(){
		return (
			<div className="app-login">
				<div className="logo"><img src={logo}/></div>
				<div className="login-button"></div>
			</div>
		)
	}
}

export default Main;