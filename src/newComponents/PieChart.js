import React from "react"
import { Pie } from "react-chartjs-2"
import {Container } from "react-bootstrap"
import axios from 'axios'
import {RIT, MINECRAFT, 
  BITCOIN, WALLSTREET,
ROBINHOOD, GAMESTOP, PLAYSTATION,
XBOX, NINTENDO, TWITCH} from './BrandColors'



class PieChart extends React.Component {

    componentDidMount(){
        // axios.get('http://localhost:5000/infos')
        // .then(res =>{
        //   const infos = res.data
        //   console.log(res.data)
        //   const lengths = infos.result.rows.length
        //   console.log(infos.result.rows[412])
        // })
    }

    state = {
      dataPie: {
        labels: ["rit", "minecraft", "bitcoin", "wallstreetbets", "robinhood", "gamestop","playstation","xbox","nintendo","twitch"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120, 340, 130, 234, 234, 105],
            backgroundColor: [
              RIT.PRIMARY,
              MINECRAFT.PRIMARY,
              BITCOIN.PRIMARY,
              WALLSTREET.PRIMARY,
              ROBINHOOD.PRIMARY,
              GAMESTOP.PRIMARY,
              PLAYSTATION.PRIMARY,
              XBOX.PRIMARY,
              NINTENDO.PRIMARY,
              TWITCH.PRIMARY
            ],
            hoverBackgroundColor: [
             RIT.HOVER,
             MINECRAFT.HOVER,
             BITCOIN.HOVER,
             WALLSTREET.HOVER,
             ROBINHOOD.HOVER,
             GAMESTOP.HOVER,
             PLAYSTATION.HOVER,
             XBOX.HOVER,
             NINTENDO.HOVER,
             TWITCH.HOVER
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