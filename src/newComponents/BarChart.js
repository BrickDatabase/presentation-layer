import React from "react"
import { Bar } from "react-chartjs-2"
import { Container } from "react-bootstrap"
import {RIT, MINECRAFT, 
  BITCOIN, WALLSTREET,
ROBINHOOD, GAMESTOP, PLAYSTATION,
XBOX, NINTENDO, TWITCH} from './BrandColors'

class BarChart extends React.Component {
  state = {
    dataBar: {
      labels: ["rit", "minecraft", "bitcoin", "wallstreetbets", "robinhood", 
      "gamestop","playstation","xbox","nintendo","twitch"],
      datasets: [
        {
          label: "% of Comments",
          data: [12, 19, 3, 5, 2, 3, 7, 8, 9, 2],
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
        <h3 className="mt-5">Bar chart</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </Container>
    );
  }
}

export default BarChart