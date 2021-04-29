import React from "react"
import { Pie } from "react-chartjs-2"
import {Container } from "react-bootstrap"
import {RIT, MINECRAFT, 
  BITCOIN, WALLSTREET,
ROBINHOOD, GAMESTOP, PLAYSTATION,
XBOX, NINTENDO, TWITCH} from './BrandColors'



class PieChart extends React.Component {

    constructor(props){
      super(props)

    }

    componentDidMount(){

    }

    state = {
      dataPie: {
        labels: ["rit", "minecraft", "bitcoin", "wallstreetbets", "robinhood", "gamestop","playstation","xbox","nintendo","twitch"],
        datasets: [
          {
            data: [this.props.datas[9].new_active_subs, this.props.datas[8].new_active_subs, this.props.datas[7].new_active_subs, this.props.datas[6].new_active_subs, this.props.datas[5].new_active_subs, this.props.datas[4].new_active_subs, this.props.datas[3].new_active_subs, this.props.datas[2].new_active_subs, this.props.datas[1].new_active_subs, this.props.datas[0].new_active_subs],
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
          <h3 className="mt-5">Pie Chart: Active Subscribers</h3>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </Container>
      );
    }
  }
  
  export default PieChart;