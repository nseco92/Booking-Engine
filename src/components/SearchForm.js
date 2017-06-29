import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';


export default class SearchForm extends Component{
	render(){
	    return (
			<form onSubmit={this.props.setSearch}>	
				<Col mdPush={1} xs={12} sm={6} md={3} className="col-boot" >
				    <input type="date" placeholder="Check-in date: " name="checkIn" className="date" />
				</Col> 
			    <Col mdPush={1} xs={12} sm={6} md={3} className="col-boot" >
			    	<input type="date" placeholder="Check-out date: " name="checkOut" className="date" />
			    </Col>
			   	<Col mdPush={1} xs={12} sm={6} md={2} className="col-boot" >
				  	<select name="peopleInput">
					    <option value="All room sizes" selected>All room sizes</option>
					    {
					    	this.props.people.map(function(user,i) {
					      		return <option value={user}>{user}</option>;
					    	})
					    }
				  	</select>
			  	</Col>
			  	<Col mdPush={1} xs={12} sm={6} md={2} className="col-boot">
					<select name="roomTypes" required>
					    <option value="All room types" selected>All room types</option>
					    {
					    	this.props.room.map(function(room,i) {
					        	return <option value={room}>{room}</option>;
					    	})
					    }
				  	</select>
			  	</Col>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<input id="submit" className={`indicator${this.props.currentSlide === 0 ? ' current' : ''}`} type="submit" value="Search" />	
			</form>
	    );
  	}
}

