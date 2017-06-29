import React, { Component } from 'react';

class HotelBookings extends Component {
  render () {
    return (
      <li>
        {this.props.type} - {this.props.number} -  
        {
          this.props.reserved.map((z,index) => {
	          return (
	            <span>{z} / </span>
	          );
          })
        }      
      </li>
    );
  }
}

export default HotelBookings;
