import { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {Container, Row, Col,Button } from "react-bootstrap"
import LineChart from './LineChart'

class Dashboard extends Component {

    constructor(props){
        super(props)

        this.state = {chart:<LineChart/>}
        // this.getPie = this.getPie.bind(this)
        // this.getLine = this.getLine.bind(this)
        this.onChartChanged = this.onChartChanged.bind(this)
    }

    onChartChanged(values)
    {
        this.setState({chart:values})
    }
    
    render(){
        return (
            <>
            <Header/>
            <Container fluid>
            <Row>
                <Col xs={3} id="sidebar-wrapper">
                <Sidebar charts={this.state.chart} onChartChanged={this.onChartChanged}/>
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