import { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger} from '@fortawesome/free-solid-svg-icons'
import PieChart from './PieChart'
import LineChart from './LineChart'
import { Line } from 'react-chartjs-2'

class Dashboard extends Component {

    constructor(props){
        super(props)

        this.state = {chart:<PieChart/>}  
    }

    getPie()
    {
        this.setState({chart:<PieChart/>})
    }

    getLine()
    {
        this.setState({chart:<LineChart/>})
    }

    render(){
        return (
            <>
            <Header/>
            <Container fluid>
            <Row>
                <Col xs={3} id="sidebar-wrapper">
                <Sidebar/>
                </Col>
                <Col id="page-content-wrapper">
                    {this.state.chart}
                </Col>
            </Row>
            </Container>
            </>
        )
    }
}

export default Dashboard