import React from "react";
import { Polar } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import {RIT, MINECRAFT, 
  BITCOIN, WALLSTREET,
ROBINHOOD, GAMESTOP, PLAYSTATION,
XBOX, NINTENDO, TWITCH} from './BrandColors'

class PolarChart extends React.Component {

  constructor(props){
    super(props)
  
  }
  
   componentDidMount(){
  
  }  

  state = {
    dataPolar: {
        labels: ["rit", "minecraft", "bitcoin", "wallstreetbets", "robinhood", 
      "gamestop","playstation","xbox","nintendo","twitch"],
      datasets: [
        {
          data: [this.props.datas[9].new_submission, 
          this.props.datas[8].new_submission, 
          this.props.datas[7].new_submission,
          this.props.datas[6].new_submission, 
          this.props.datas[5].new_submission, 
          this.props.datas[4].new_submission, 
          this.props.datas[3].new_submission, 
          this.props.datas[2].new_submission, 
          this.props.datas[1].new_submission, 
          this.props.datas[0].new_submission],
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
          label: "My dataset" // for legend
        }
      ],
    }
  }

  render() {
    return (
      <Container>
        <h3 className="mt-5">Stack Chart: Submission</h3>
        <Polar data={this.state.dataPolar} options={{ responsive: true }} />
      </Container>
    );
  }
}

export default PolarChart;