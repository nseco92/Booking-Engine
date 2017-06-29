import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import UpdateCart from '../components/UpdateCart';

export default class FinishBooking extends Component{


  	render(){

	  	if(this.props.userData[0] != null && this.props.actualSearch[0] != null){
		    return (
				<Grid>
					
					<Col smPush={3} xs={12} sm={6} md={8} className="formBook">
						<h1 className="highlightGreen"> Your booking is done </h1>
						<p> Dear {this.props.userData[0].name} {this.props.userData[0].surname} <br />
						<div className="separator"></div>
							You just booked: <br />
							{ this.props.bookedRooms[0].single != 0 ? "- " + this.props.bookedRooms[0].single + " single room" +" x 60.00 € = " + (this.props.bookedRooms[0].single *Number(60)) + ".00 €" : ""} {this.props.bookedRooms[0].single != 0 ? <br/>:""}
							{ this.props.bookedRooms[0].double != 0 ? "- " +this.props.bookedRooms[0].double + " double room" +" x 120.00 € = " + (this.props.bookedRooms[0].double *Number(120)) + ".00 €" : ""}{this.props.bookedRooms[0].double != 0 ? <br/>:""}
							{ this.props.bookedRooms[0].suite != 0 ? "- " +this.props.bookedRooms[0].suite + " suite room" +" x 60.00 € = " + (this.props.bookedRooms[0].suite *Number(120)) + ".00 €" : ""}{this.props.bookedRooms[0].suite != 0 ? <br/>:""}
							{ this.props.bookedRooms[0].triple != 0 ? "- " +this.props.bookedRooms[0].triple + " triple room" +" x 250.00 € = " + (this.props.bookedRooms[0].triple *Number(250)) + ".00 €" : "" }	{this.props.bookedRooms[0].triple != 0 ? <br/>:""}					
							<span className="highlightRed">
							{"Total: "+ (Number(this.props.bookedRooms[0].single *Number(60)) + Number(this.props.bookedRooms[0].double *Number(120))+Number(this.props.bookedRooms[0].suite *Number(120))+Number(this.props.bookedRooms[0].triple *Number(250)))+" €"}
							</span>
							<br />
							For days: {this.props.actualSearch[0].reserved[0]} - {this.props.actualSearch[0].reserved[1]} <br />
							An e-mail with this information will be send to your mail: {this.props.userData[0].mail}
						</p>
						<Button className="btn-success returnBook" onClick={this.props.onReturnButton.bind(this)}>New Booking</Button>
					</Col>
				</Grid>
			   );
		}
		else{
			return (
				<Grid>
					<Col mdPush={2} xs={12} sm={6} md={8} className="formBook">
						<h1> </h1>
					</Col>
				</Grid>
		    );
		}
  	}
}

