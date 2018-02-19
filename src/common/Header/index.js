import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        }
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass(index, e) {
        this.setState({ activeIndex: index });
    }

    isActive = path => {
        return (path === (window.location.pathname.split('/')[2] === undefined ? 'operator' : window.location.pathname.split('/')[2]) ? true : false)
    }
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="wrap">
                        <div className="white-box clearfix">
                            <ul>
                                <li className={this.isActive('dashboard') ? 'active' : null} onClick={this.toggleClass.bind(this, 0)}>
                                    <Link to="/home/dashboard">dashboard</Link>
                                </li>
                                <li className={this.isActive('users') ? 'active' : null} onClick={this.toggleClass.bind(this, 1)}>
                                    <Link to="/home/users">users</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Header);