import React, {Component}  from 'react'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Inputs extends React.Component {

    render(){
        return(
            <div>
            <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio button for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with radio button" />
            </InputGroup>
            </div>
        )
    }
}

