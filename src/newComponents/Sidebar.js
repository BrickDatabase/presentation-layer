import { Component } from 'react'
import { Nav, Navbar,Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChartArea, faChartLine, faChartPie} from '@fortawesome/free-solid-svg-icons'
import '../styles/sidebar.css'

class Sidebar extends Component{
    render(){
        return(
            <div className="col-md-12 d-none d-md-block bg-light sidebar">
                <div onClick={this.getLine}>
            <Navbar bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'4%'}}>
                    <Navbar.Brand >
                    <FontAwesomeIcon icon={faChartLine} size="lg" />
                        Line Chart
                        </Navbar.Brand>
                </Navbar>
                </div>
                <div onClick={this.getPie}>
                <Navbar bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'4%'}} >
                    <Navbar.Brand>
                    <FontAwesomeIcon icon={faChartPie} size="lg"/>
                        Pie Chart
                        </Navbar.Brand>
                </Navbar>
                </div>
            </div>
        )
    }
}

export default Sidebar