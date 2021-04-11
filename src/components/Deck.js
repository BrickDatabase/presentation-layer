import React, {Component}  from 'react'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import "bootstrap/dist/css/bootstrap.min.css";

class Deck extends React.Component{

    constructor(props) {
        super(props)
        
        switch(this.props.op)
        {
            case 'inputs':
                this.state = {views:this.inputs()}
                break
            case 'radios':
                this.state = {views:this.radios()}
                break
            case 'fourthBox':
                this.state = {views:this.fourthBox()}
                break
            default:
                this.state = {views:this.inputs()}
                break
        }
    }

    inputs()
        {
            const v = 
            <fieldset>
                <Form.Group as={Row}>
                <Col sm={12}>
                    <Form.Check
                    type="radio"
                    label="Gifs"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <Form.Check
                    type="radio"
                    label="Gaming"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                    <Form.Check
                    type="radio"
                    label="Foodie"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    />
                    <Form.Check
                    type="radio"
                    label="Corgi"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    />
                </Col>
                </Form.Group>
            </fieldset>

            return v
        }

    radios(){
        const r = 
        <fieldset>
        <Form.Group as={Row}>
          <Col sm={12}>
            <Form.Check
              type="radio"
              label="Bar Chart"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Line Chart"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Pie Chart"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="radio"
              label="Scatter Chart"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>

      return r
    }

    fourthBox(){ 
        const w =
            <DropdownButton id="dropdown-basic-button" title="Features">
            <Dropdown.Item href="#/action-1">Comments</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Subscribe</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Views</Dropdown.Item>
            </DropdownButton>

        return w
    }

//Type of Charts
//width: '20rem', height: '100%'

//Result
//width: '15rem', height: '100%'
    render(){
        return(
            //  <div class="card">
                <Card style={this.props.style} className='board'>
                    <Card.Body>
                        <Card.Title style={{backgroundColor: 'white', padding: '10px'}}>{this.props.title}</Card.Title>
                        <p style={{ marginTop: '-2%', paddingBottom: '50%'}}>{this.state.views}</p>
                    </Card.Body>
                </Card>
            //  </div>
        )
    }
}

export default Deck