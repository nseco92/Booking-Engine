import React, { Component } from 'react'
import HotelBookings from '../components/HotelBookings';

class ActualBookingsList extends Component {
  render () {
    return (
        <ul>
          {this.props.bookingDB.map(u => {
            return (
              <HotelBookings
                type={u.type}
                reserved={u.reserved}
                number={u.number}
              />
            );
          })}
        </ul>
    );
  }
}

export default ActualBookingsList;
