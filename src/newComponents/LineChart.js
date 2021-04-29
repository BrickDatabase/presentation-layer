import React from "react"
import { Line } from "react-chartjs-2"
import { Container,Button } from "react-bootstrap"
import {RIT, MINECRAFT, 
  BITCOIN, WALLSTREET,
ROBINHOOD, GAMESTOP, PLAYSTATION,
XBOX, NINTENDO, TWITCH} from './BrandColors'
import Global from '../helpers/Global'

class LineChart extends React.Component {

  constructor(props) {
    super(props)

    console.log(this.props.datas[9].new_comment)
    this.getSubscribers()
    
  }

  componentDidMount(){

    
  }

  state = {
    dataLine: {
      labels: ["Day 05", "Day 10", "Day 15", "day 20", "day 25", "Day 30"],
      datasets: [
        {
          label: "rit",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(247, 105, 2, .3)",
          borderColor: RIT.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: RIT.PRIMARY,
          pointBackgroundColor: RIT.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [Global.Rit[0], Global.Rit[1], Global.Rit[2], Global.Rit[3], Global.Rit[4],Global.Rit[5]]
        },
        {
          label: "minecraft",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: MINECRAFT.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: MINECRAFT.PRIMARY,
          pointBackgroundColor: MINECRAFT.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[8].new_subscriber, this.props.datas[48].new_subscriber, this.props.datas[98].new_subscriber, this.props.datas[148].new_subscriber, this.props.datas[198].new_subscriber, this.props.datas[248].new_subscriber]
        },
        {
          label: "bitcoin",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: BITCOIN.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: BITCOIN.PRIMARY,
          pointBackgroundColor: BITCOIN.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[7].new_subscriber, this.props.datas[47].new_subscriber, this.props.datas[97].new_subscriber, this.props.datas[147].new_subscriber, this.props.datas[197].new_subscriber, this.props.datas[247].new_subscriber]
        },
        {
          label: "wallstreetbets",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: WALLSTREET.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: WALLSTREET.PRIMARY,
          pointBackgroundColor: WALLSTREET.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[6].new_subscriber, this.props.datas[46].new_subscriber, this.props.datas[96].new_subscriber, this.props.datas[146].new_subscriber, this.props.datas[196].new_subscriber, this.props.datas[246].new_subscriber]
        },
        {
          label: "robinhood",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: ROBINHOOD.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: ROBINHOOD.PRIMARY,
          pointBackgroundColor: ROBINHOOD.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[5].new_subscriber, this.props.datas[45].new_subscriber, this.props.datas[95].new_subscriber, this.props.datas[145].new_subscriber, this.props.datas[195].new_subscriber, this.props.datas[245].new_subscriber]
        },
        {
          label: "gamestop",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: GAMESTOP.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: GAMESTOP.PRIMARY,
          pointBackgroundColor: GAMESTOP.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[4].new_subscriber, this.props.datas[44].new_subscriber, this.props.datas[94].new_subscriber, this.props.datas[144].new_subscriber, this.props.datas[194].new_subscriber, this.props.datas[244].new_subscriber]
        },
        {
          label: "playstation",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: PLAYSTATION.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: PLAYSTATION.PRIMARY,
          pointBackgroundColor: PLAYSTATION.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[3].new_subscriber, this.props.datas[43].new_subscriber, this.props.datas[93].new_subscriber, this.props.datas[143].new_subscriber, this.props.datas[193].new_subscriber, this.props.datas[243].new_subscriber]
        },
        {
          label: "xbox",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: XBOX.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: XBOX.PRIMARY,
          pointBackgroundColor: XBOX.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[2].new_subscriber, this.props.datas[42].new_subscriber, this.props.datas[92].new_subscriber, this.props.datas[142].new_subscriber, this.props.datas[192].new_subscriber, this.props.datas[242].new_subscriber]
        },
        {
          label: "nintendo",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: NINTENDO.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: NINTENDO.PRIMARY,
          pointBackgroundColor: NINTENDO.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[1].new_subscriber, this.props.datas[41].new_subscriber, this.props.datas[91].new_subscriber, this.props.datas[141].new_subscriber, this.props.datas[191].new_subscriber, this.props.datas[241].new_subscriber]
        },
        {
          label: "twitch",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: TWITCH.PRIMARY,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: TWITCH.PRIMARY,
          pointBackgroundColor: TWITCH.PRIMARY,
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.datas[0].new_subscriber, this.props.datas[40].new_subscriber, this.props.datas[90].new_subscriber, this.props.datas[140].new_subscriber, this.props.datas[190].new_subscriber, this.props.datas[240].new_subscriber]
        }
      ]
    },
    rit_subscribe: {
      one:[this.props.datas[9].new_subscriber],
      two:[this.props.datas[49].new_subscriber],
      three:[this.props.datas[99].new_subscriber],
      four:[this.props.datas[149].new_subscriber],
      five:[this.props.datas[199].new_subscriber],
      six:[this.props.datas[249].new_subscriber]
    }
  };

  getSubscribers(){
    Global.Rit[0] = this.props.datas[9].new_subscriber
    Global.Rit[1] = this.props.datas[49].new_subscriber
    Global.Rit[2] = this.props.datas[99].new_subscriber
    Global.Rit[3] = this.props.datas[149].new_subscriber
    Global.Rit[4] = this.props.datas[199].new_subscriber
    Global.Rit[5] = this.props.datas[249].new_subscriber
  }

  render() {
    return (
      <Container>
        <h3 className="mt-5">Line chart: New Subscribers</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
        {/* <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px',marginRight:'25px',marginLeft:'130px'}} onClick={this.getSubscribers}>
          Total Subscribers
        </Button>
        <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px',marginRight:'25px'}}>
          Active Subscribers
        </Button>
        <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px',marginRight:'25px'}} onClick={this.getComments}>
          Comments
        </Button>
        <Button bg="dark" variant="dark" style={{marginBottom:'5px',borderRadius:'5px', marginRight:'25px'}}>
          Submission
        </Button> */}
      </Container>
    );
  }
}

export default LineChart;