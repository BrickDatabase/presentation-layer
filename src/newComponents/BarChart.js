import React from "react"
import { Bar } from "react-chartjs-2"
import { Container } from "react-bootstrap"
import {RIT, MINECRAFT, 
  BITCOIN, WALLSTREET,
ROBINHOOD, GAMESTOP, PLAYSTATION,
XBOX, NINTENDO, TWITCH} from './BrandColors'

class BarChart extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  state = {
    dataBar: {
      labels: ["rit", "minecraft", "bitcoin", "wallstreetbets", "robinhood", 
      "gamestop","playstation","xbox","nintendo","twitch"],
      datasets: [
        {
          // label: "% of Comments",
          data: [this.props.datas[9].new_comment, this.props.datas[8].new_comment, this.props.datas[7].new_comment, this.props.datas[6].new_comment, this.props.datas[5].new_comment, this.props.datas[4].new_comment, this.props.datas[3].new_comment, this.props.datas[2].new_comment, this.props.datas[1].new_comment, this.props.datas[0].new_comment],
          backgroundColor: [
            RIT.FILL,
            MINECRAFT.FILL,
            BITCOIN.FILL,
            WALLSTREET.FILL,
            ROBINHOOD.FILL,
            GAMESTOP.FILL,
            PLAYSTATION.FILL,
            XBOX.FILL,
            NINTENDO.FILL,
            TWITCH.FILL
          ],
          borderWidth: 2,
          borderColor: [
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
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }


  render() {
    return (
      <Container>
        <h3 className="mt-5">Bar chart: Comments</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </Container>
    );
  }
}

export default BarChart