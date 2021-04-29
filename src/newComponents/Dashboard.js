import { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {Container, Row, Col} from "react-bootstrap"


class Dashboard extends Component {

    constructor(props){
        super(props)

        this.onChartChanged = this.onChartChanged.bind(this)
        
          this.state = {chart:""}
    }

    componentDidMount() {

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
                <Sidebar onChartChanged={this.onChartChanged}/>
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