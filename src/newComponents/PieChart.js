import React from "react"
import { Pie } from "react-chartjs-2"
import {Container } from "react-bootstrap"
import axios from 'axios'



class PieChart extends React.Component {

    componentDidMount(){
        axios.get('http://localhost:5000/infos')
        .then(res =>{
          const infos = res.data
          console.log(res.data)
          const lengths = infos.result.rows.length
          console.log(infos.result.rows[412])
        })
    }

    state = {
      dataPie: {
        labels: ["rit", "minecraft", "bitcoin", "wallstreetbets", "robinhood", "gamestop","playstation","xbox","nintendo","twitch"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120, 340, 130, 234, 234, 105],
            backgroundColor: [
              "#F76902",
              "#028A0F",
              "#f2a900",
              "#949FB1",
              "#4D5360",
              "#260000",
              "#1520A6",
              "#083e08",
              "#E60012",
              "#6441A4"
            ],
            hoverBackgroundColor: [
             "#f88734",
             "#34a13e",
             "#f4ba32",
             "#a9b2c0",
             "#70757f",
             "#513232",
             "#434cb7",
             "#3f963f",
             "#eb3241",
             "#8366b6"
            ]
          }
        ]
      }
    }
  
    render() {
      return (
        <Container>
          <h3 className="mt-5">Pie chart</h3>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </Container>
      );
    }
  }
  
  export default PieChart;