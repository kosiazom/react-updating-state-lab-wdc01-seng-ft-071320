// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            timesClicked: 0
         }
    }

    increaseClick = () => {
        // this.setState({
        //     timesClicked: this.state.timesClicked+=1
        // })

        this.setState(previousState => ({
            timesClicked: previousState.timesClicked +=1
            
        }))
    }



    render() { 
        return ( <div>
            <button onClick={this.increaseClick}>{this.state.timesClicked}</button>
        </div> );
    }
}
 
export default DigitalClicker;