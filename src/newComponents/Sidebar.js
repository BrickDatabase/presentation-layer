import { Component } from 'react'
import { Nav, Navbar,Container, Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChartArea, faChartLine, faChartPie, faChartBar} from '@fortawesome/free-solid-svg-icons'
import '../styles/sidebar.css'
import Dashboard from './Dashboard'
import PieChart from './PieChart'
import LineChart from './LineChart'
import RadarChart from './RadarChart'
import BarChart from './BarChart'

class Sidebar extends Component{

    constructor(props)
    {
        super(props)
        this.props.onChartChanged(<LineChart/>)
        this.getPie = this.getPie.bind(this)
        this.getLine = this.getLine.bind(this)
        this.getRadar = this.getRadar.bind(this)
        this.getBar = this.getBar.bind(this)
    }

    getPie()
    {
        this.props.onChartChanged(<PieChart/>)
    }

    getLine()
    {
        this.props.onChartChanged(<LineChart/>)
    }

    getRadar()
    {
        this.props.onChartChanged(<RadarChart/>)
    }

    getBar()
    {
        this.props.onChartChanged(<BarChart/>)
    }

    render(){
        return(
            <div className="col-md-12 d-md-block bg-light">

                <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px', width:'100%',height:'80px'}} onClick={this.getLine}>
                <FontAwesomeIcon icon={faChartLine} size="lg" />
                        Line Chart
                </Button>
                <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px', width:'100%', height:'80px'}} onClick={this.getPie}>
                    <FontAwesomeIcon icon={faChartPie} size="lg"/>
                        Pie Chart
                </Button>
                <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px', width:'100%', height:'80px'}} onClick={this.getRadar}>
                    <FontAwesomeIcon icon={faChartArea} size="lg"/>
                        Radar Chart
                </Button>
                <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px', width:'100%', height:'80px'}} onClick={this.getBar}>
                    <FontAwesomeIcon icon={faChartBar} size="lg"/>
                        Bar Chart
                </Button>
            </div>
        )
    }
}

export default Sidebar