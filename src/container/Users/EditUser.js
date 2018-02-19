import React from 'react'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

export default class EditRoom extends React.Component {
    editUser = user => {
        console.log('====================================');
        console.log(this.props.user);
        console.log('====================================');
    }
    render () {
        return (
            <div>
                <Modal show={this.props.showEdit} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>edit user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>name:</ControlLabel>
                            <FormControl type="text" defaultValue={this.props.user.name} inputRef={(ref) => this.name = ref}></FormControl>
                            <ControlLabel>status:</ControlLabel>
                            <FormControl type="text" defaultValue={this.props.user.status} inputRef={(ref) => this.genre = ref}></FormControl>
                            <ControlLabel>last login:</ControlLabel>
                            <FormControl type="date" defaultValue={this.props.user.lastLogin} inputRef={(ref) => this.date = ref}></FormControl>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="blue-btn" onClick={this.editUser(this.props.user)}>edit</Button>
                        <Button className="gray-btn" onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
        )
    }
}