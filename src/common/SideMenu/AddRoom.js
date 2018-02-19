import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {serverUrl} from '../Query'
import AlertContainer from 'react-alert'
import moment from 'moment'

import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class AddRoom extends React.Component {
    state = {
        image: ''
    }
    addRoom = () => {
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        const request = {
	        title: this.title.value,
	        genre: this.genre.value,
            expireOn: moment(this.expire.value).format("x"),
            // "129712", //timestamp
	        description: this.description.value,
	        playlistCount: this.playlistCount.value,
	        backgroundImage: this.state.image
        }
        const headers = {
            'Content-Type': 'application/json',
            'x-access-token': this.props.session.user.token
        }
        if (request.title === '') {
            // this.msg.show('Please add a title for the room', { type: 'error' })
        }
        else if (request.genre === '') {
            // this.msg.show('Please add a genre', { type: 'error' })
        }
        else if (request.expireOn === '') {
            // this.msg.show('Please add an expiration date', { type: 'error' })
        }
        else if (request.description === '') {
            // this.msg.show('Please add a description for the room', { type: 'error' })
        }
        else if (request.playlistCount === '') {
            // this.msg.show('Please add a playlist count for the room', { type: 'error' })
        }
        else {
            console.log('================')
            console.log(request.expireOn)
            // console.log(this.state.image)
            console.log('================')            
            axios.post(serverUrl + '/api/panel/rooms/add', request, {headers})
                .then(resp => {
                    console.log(resp)
                    if (resp.status === 200) {
                            this.msg.show('room has been added successfully', { type: 'success' })
                            this.props.close()
                        }
                        else {
                            this.msg.show('error', { type: 'error' })
                        }
                })
        }
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    render () {
        return (
            <div>
                <Modal show={this.props.showAdd} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>add a new room</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>title:</ControlLabel>
                            <FormControl type="text" required inputRef={(ref) => this.title = ref}></FormControl>
                            <ControlLabel>genre:</ControlLabel>
                            <FormControl type="text" required inputRef={(ref) => this.genre = ref}></FormControl>
                            <ControlLabel>expire on:</ControlLabel>
                            <FormControl type="date" required inputRef={(ref) => this.expire = ref}></FormControl>
                            <ControlLabel>description:</ControlLabel>
                            <FormControl type="text" required inputRef={(ref) => this.description = ref}></FormControl>
                            <ControlLabel>playlist count:</ControlLabel>
                            <FormControl type="number" required inputRef={(ref) => this.playlistCount = ref}></FormControl>
                            <ControlLabel>background image:</ControlLabel>
                            <FormControl type="file" onChange={this.onImageChange.bind(this)} className="filetype" id="group_image" ></FormControl>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="blue-btn" onClick={() => this.addRoom()}>add</Button>
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

export default connect(mapStateToProps)(AddRoom)