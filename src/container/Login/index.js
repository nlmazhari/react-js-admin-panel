import React, { Component } from 'react'
import { connect } from 'react-redux'
import AlertContainer from 'react-alert'
import {handleLogin} from '../../redux/action'
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap'

class Login extends Component {

	handleLogin = e => {
        e.preventDefault()
        this.props.handleLogin(this.email.value, this.password.value)
    }
    
    componentWillMount = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div className="login">
                <div className="form">
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <ControlLabel>email</ControlLabel>
                            <FormControl type="email" inputRef={(ref) => this.email = ref}></FormControl>
                            <ControlLabel>password</ControlLabel>
                            <FormControl type="password" inputRef={(ref) => this.password = ref} ></FormControl>                        
                        </FormGroup>
                        <Button type="submit">login</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps ,  { handleLogin })(Login)