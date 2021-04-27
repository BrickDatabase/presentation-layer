import React from "react";
import { Radar } from "react-chartjs-2";
import { Container } from "react-bootstrap";


class RadarChart extends React.Component {
  state = {
    dataRadar: {
      labels: ["Subscribers", "Active Subscribers", "Comments", "Submission"],
      datasets: [
        {
          label: "rit",
          backgroundColor: "#fbc399",
          borderColor: "#F76902",
          data: [65, 59, 90, 81]
        },
        {
          label: "minecraft",
          backgroundColor: "#99d09f",
          borderColor: "#028A0F",
          data: [28, 48, 40, 19]
        },
        {
            label: "bitcoin",
            backgroundColor: "#f9dc99",
            borderColor: "#f2a900",
            data: [23, 48, 40, 19]
        },
        {
            label: "wallstreetbets",
            backgroundColor: "#d4d8df",
            borderColor: "#949FB1",
            data: [28, 30, 40, 19]
        },
        {
            label: "robinhood",
            backgroundColor: "#b7babf",
            borderColor: "#4D5360",
            data: [28, 48, 67, 19]
        },
        {
            label: "gamestop",
            backgroundColor: "#a89999",
            borderColor: "#260000",
            data: [28, 48, 40, 83]
        },
        {
            label: "playstation",
            backgroundColor: "#a1a5db",
            borderColor: "#1520A6",
            data: [28, 42, 40, 39]
        },
        {
            label: "xbox",
            backgroundColor: "#9cb19c",
            borderColor: "#083e08",
            data: [21, 56, 40, 19]
        },
        {
            label: "nintendo",
            backgroundColor: "#f599a0",
            borderColor: "#E60012",
            data: [28, 98, 40, 4]
        },
        {
            label: "twitch",
            backgroundColor: "#c1b3da",
            borderColor: "#6441A4",
            data: [70, 48, 23, 19]
        }
      ]
    }
  }

  /*
  active_subscribers: 5
comments: 3
date: "2020-12-07T15:30:39.000Z"
id: 415
submission: 67
subreddit_id: 2
subscribers: 9
  */


render() {
    return (
      <Container>
        <h3 className="mt-5">Radar chart</h3>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </Container>
    );
  }
}

export default RadarChart;