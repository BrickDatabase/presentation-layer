import React from "react";
import { Radar } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import {RIT, MINECRAFT, 
  BITCOIN, WALLSTREET,
ROBINHOOD, GAMESTOP, PLAYSTATION,
XBOX, NINTENDO, TWITCH} from './BrandColors'


class RadarChart extends React.Component {
  state = {
    dataRadar: {
      labels: ["Subscribers", "Active Subscribers", "Comments", "Submission"],
      datasets: [
        {
          label: "rit",
          backgroundColor: RIT.FILL,
          borderColor: RIT.PRIMARY,
          data: [65, 59, 90, 81]
        },
        {
          label: "minecraft",
          backgroundColor: MINECRAFT.FILL,
          borderColor: MINECRAFT.PRIMARY,
          data: [28, 48, 40, 19]
        },
        {
            label: "bitcoin",
            backgroundColor: BITCOIN.FILL,
            borderColor: BITCOIN.PRIMARY,
            data: [23, 48, 40, 19]
        },
        {
            label: "wallstreetbets",
            backgroundColor: WALLSTREET.FILL,
            borderColor: WALLSTREET.PRIMARY,
            data: [28, 30, 40, 19]
        },
        {
            label: "robinhood",
            backgroundColor: ROBINHOOD.FILL,
            borderColor: ROBINHOOD.PRIMARY,
            data: [28, 48, 67, 19]
        },
        {
            label: "gamestop",
            backgroundColor: GAMESTOP.FILL,
            borderColor: GAMESTOP.PRIMARY,
            data: [28, 48, 40, 83]
        },
        {
            label: "playstation",
            backgroundColor: PLAYSTATION.FILL,
            borderColor: PLAYSTATION.PRIMARY,
            data: [28, 42, 40, 39]
        },
        {
            label: "xbox",
            backgroundColor: XBOX.FILL,
            borderColor: XBOX.PRIMARY,
            data: [21, 56, 40, 19]
        },
        {
            label: "nintendo",
            backgroundColor: NINTENDO.FILL,
            borderColor: NINTENDO.PRIMARY,
            data: [28, 98, 40, 4]
        },
        {
            label: "twitch",
            backgroundColor: TWITCH.FILL,
            borderColor: TWITCH.PRIMARY,
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