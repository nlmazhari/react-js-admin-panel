import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactHighcharts from 'react-highcharts'
import {Row, Col} from 'react-bootstrap'
const roomsConfig = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Chart Title'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    plotOptions: {
        series: {
            allowPointSelect: true
        }
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
}
const usersConfig = {
    chart: {
        type: 'column'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    plotOptions: {
        series: {
            allowPointSelect: true
        }
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
}
const playlistsConfig = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    plotOptions: {
        series: {
            allowPointSelect: true
        }
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
}
class Dashboard extends Component {
    componentDidMount = () => {
        console.log(this.props)
    }
    
    render() {
        return (
            <div className="dashboard">
                <Row>
                    <Col xs={12} md={8}>
                        <ReactHighcharts config={usersConfig} />
                        <ReactHighcharts config={playlistsConfig} />
                    </Col>
                    <Col xs={12} md={4}>
                        <ReactHighcharts config={roomsConfig} />
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Dashboard)