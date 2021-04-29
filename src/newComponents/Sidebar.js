import axios from 'axios'
import { Component } from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faChartLine, faChartPie, faChartBar} from '@fortawesome/free-solid-svg-icons'
import '../styles/sidebar.css'
import PieChart from './PieChart'
import LineChart from './LineChart'
import PolarChart from './PolarChart'
import BarChart from './BarChart'

class Sidebar extends Component{

    constructor(props)
    {
        super(props)
        this.onJsonChanged = this.onJsonChanged.bind(this)
        this.onSchedulesChanged = this.onSchedulesChanged.bind(this)
        this.getJson = this.getJson.bind(this)
        this.getSchedules = this.getSchedules.bind(this)
        this.getPie = this.getPie.bind(this)
        this.getLine = this.getLine.bind(this)
        this.getPolar = this.getPolar.bind(this)
        this.getBar = this.getBar.bind(this)
    }

    componentDidMount(){

        var getJ = ""

        axios.get('https://brick-subreddit.herokuapp.com/scheduleds')
            .then(res =>{
                const all = res.data
                
                this.onSchedulesChanged(all.result.rows)
                this.props.onChartChanged(<LineChart datas={all.result.rows}/>)
        })

        axios.get('https://brick-subreddit.herokuapp.com/scheduleld')
          .then(res =>{
            const last = res.data
            console.log(res.data)
            
            this.onJsonChanged(last.result.rows)
            getJ = last.result.rows[0]
            
            
        })    
    }

    getPie()
    {
        this.props.onChartChanged(<PieChart datas={this.getJson()}/>)
    }

    getLine()
    {
        this.props.onChartChanged(<LineChart datas={this.getSchedules()}/>)
    }

    getPolar(){
        this.props.onChartChanged(<PolarChart datas={this.getJson()}/>)
    }

    getBar(){
        this.props.onChartChanged(<BarChart datas={this.getJson()}/>)
    }

    onJsonChanged(values){

        this.setState({json:values})
    }
  
    getJson(){
  
        return this.state.json
    }

    onSchedulesChanged(values) {

        this.setState({schedules:values})
    }

    getSchedules(){

        return this.state.schedules
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
                <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px', width:'100%', height:'80px'}} onClick={this.getPolar}>
                    <FontAwesomeIcon icon={faChartArea} size="lg"/>
                        Polar Chart
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