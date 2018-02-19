import React from 'react'
import { connect } from "react-redux"
import { Button, Image } from 'react-bootstrap'

import AddRoom from './AddRoom'
import EditProfile from './EditProfile'
import { handleLogout } from '../../redux/action'
 
class SideMenu extends React.Component {
    state = {
        showAdd: false, 
        showEdit: false
    }

    showAddRoom = () => {
        this.setState({showAdd: true})
    }

    showEditProfile = () => {
        this.setState({showEdit: true})
    }

    close = () => {
        this.setState({showAdd: false, showEdit: false})        
    }

    render() {
        const { showAdd, showEdit } =  this.state
        return (
            <div>
                <div className="sidemenu">
                    <div className="user-info">
                        <div className="profile-icon" style={{backgroundImage: 'url(/assets/img/profile.png)'}}></div>
                        <p className="user-name">welcome, admin</p>
                    </div>
                    <div className="links">
                        <Button className="side-btn" onClick={this.showEditProfile}>
                            <Image src="/assets/img/edit-profile.png" />
                            edit profile info
                        </Button>
                        <Button className="side-btn" onClick={this.showAddRoom}>
                            some other links here
                        </Button>
                    </div>
                    <div className="logout-wrap">
                        <Button className="side-btn" onClick={() => this.props.handleLogout()}>
                            <Image src="/assets/img/logout.png" />                    
                            logout
                        </Button>
                    </div>
                </div>
                <AddRoom showAdd={showAdd} close={this.close} />            
                <EditProfile showEdit={showEdit} close={this.close} />            
            </div>
        )
    }
}
const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps, { handleLogout })(SideMenu);