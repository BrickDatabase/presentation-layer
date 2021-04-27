import {Component} from 'react'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones} from '@fortawesome/free-solid-svg-icons'

class Header extends Component{

    render(){
        return(
            <div className="shadow p-3 rounded">
                
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                    <FontAwesomeIcon icon={faSkullCrossbones} size="lg"/>
                        Subreddit
                        </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Header