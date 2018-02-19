import React from 'react'
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import axios from 'axios'
import AlertContainer from 'react-alert'
import { serverUrl } from '../../common/Query'
import { connect } from 'react-redux'

class EditProfile extends React.Component {
    editProfile = () => {
        const request = {
            email: this.email.value,
            password: this.password.value                
        }
        const headers = {
            'Content-Type': 'application/json',
            'x-access-token': this.props.session.user.token
        }
        axios.post(serverUrl + '/api/panel/admin/edit', request, { headers })
                .then(resp => {
                    console.log(resp)
                    if (resp.status === 200) {
                        this.msg.show(resp.data.message, { type: 'success' })
                        this.props.close()
                    }
                    else if (resp.status === 409) {
                        this.msg.show(resp.data.message, { type: 'error' })
                    }
                })
    }
    
    render() {
        return (
            <div>
                <Modal show={this.props.showEdit} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>edit profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>new email:</ControlLabel>
                            <FormControl type="email" inputRef={(ref) => this.email = ref}></FormControl>
                            <ControlLabel>new password:</ControlLabel>
                            <FormControl type="password" inputRef={(ref) => this.password = ref}></FormControl>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="blue-btn" onClick={() => this.editProfile()}>save</Button>
                        <Button className="gray-btn" onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <AlertContainer ref={a => this.msg = a} position="top right" theme='light' />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(EditProfile)