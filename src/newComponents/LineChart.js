import React from "react"
import { Line } from "react-chartjs-2"
import { Container } from "react-bootstrap"

class LineChart extends React.Component {
  state = {
    dataLine: {
      labels: ["Day 05", "Day 10", "Day 15", "day 20", "day 25", "Day 30"],
      datasets: [
        {
          label: "rit",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(247, 105, 2, .3)",
          borderColor: "#F76902",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#F76902",
          pointBackgroundColor: "#F76902",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55]
        },
        {
          label: "minecraft",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(	2, 138, 15, .3)",
          borderColor: "#028A0F",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#028A0F",
          pointBackgroundColor: "#028A0F",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27]
        }
      ]
    }
  };

  render() {
    return (
      <Container>
        <h3 className="mt-5">Line chart</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </Container>
    );
  }
}

export default LineChart;