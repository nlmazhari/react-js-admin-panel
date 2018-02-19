import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideMenu from '../../common/SideMenu'
import Header from '../../common/Header'

class Home extends Component {

	componentWillMount(){
		console.log('this.props')
        // console.log('localStorage', localStorage)		
		if (!localStorage['loggedIn'] || localStorage['loggedIn'] === false) {
			window.location.pathname = '/'
		}
	}

	render() {
		return (
			<div>
				<Header />
				<SideMenu />
				<div className="mainbar">
					<div className="container">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Home)
