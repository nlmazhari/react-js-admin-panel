import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotMatch extends Component {
    render() {
        return (
            <div className="login">
                no match
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(NotMatch)
