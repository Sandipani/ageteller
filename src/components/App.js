import React, {Component} from 'react';
import { Form,FormControl, Button } from 'react-bootstrap';
import './App.css';
//import AgeStats from './AgeStats';

class App extends Component {
    constructor()
    {
        super();

        this.State = 
        {
          newDate: ' ',
          birthday:'1999-07-28'
        }
    }

changeBirthday(){
    console.log(this.state);
    this.setState({birthday: this.state.newDate});
}

    render () {
        return (
        <div className="App">
            <Form inline>
                <h2>Enter your birthday !!!</h2>
                <FormControl 
                    type="date"
                    onChange= {event => this.setState({newDate: event.target.value})} 
                >      
                </FormControl>
                {' '}
                <Button
                onClick={()=> this.changeBirthday()}
                >
                    Submit
                </Button>
                
            </Form>
        </div>
        )
    }
}

export default App;