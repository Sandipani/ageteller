import React, { Component } from 'react';
import PartyPopper from '../assets/party-popper.jpg'

class AgeStats extends Component {
    timeSince(date){
        let today = new Date().getTime();
        let other_date= new Date(date).getTime();
        let difference=Math.abs(today-other_date);

        let day =Math.floor(difference / (1000*3600*24));
        let years= Math.floor(day/365);
        day -= years *365;
        let months =Math.floor(day/31);
        day -= months*31;

        return `${years} Years, ${months}Months ${day} days`
    }
    
    render(){
        return(
            <div>
            <h3>{this.props.date}</h3>
            <h4>Congratulations your age is {this.timeSince(this.props.date)}</h4>
            <img src = {PartyPopper} alt="party-popper" className="party-popper"/>
            </div>
        )
    }
    
}

export default AgeStats;