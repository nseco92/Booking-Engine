import React, { Component } from 'react'
import { Grid, Col, Button } from 'react-bootstrap';

export default class DetailsForm extends Component{
	render(){
	    return (
			<Grid>	
				<Col  id="contactForm" smPush={3} xs={12} sm={6} md={6} className="formBook">
					<h2>Personal Details</h2>
					<form onSubmit={this.props.onUserInfo}>	
						<div className="inputs">
							<Col  xs={12} sm={12} md={6} className="col-boot" >
						    	<input type="text" placeholder="Name" name="Name" className="Name" />
						    </Col>
						  	<Col  xs={12} sm={12} md={6} className="col-boot" >
						   		<input type="text" placeholder="Surname" name="Surname" className="Surname" required />
						  	</Col>
						  	<Col xs={12} sm={12} md={12} className="col-boot" >
						    	<input type="email" placeholder="E-mail" name="e_mail" required />
						   	</Col>
						   	<Col xs={12} sm={12} md={12} className="col-boot" >
						    	<input type="email" placeholder="Check E-mail" name="Check_e_mail" required />
						   	</Col>
						   	<Col xs={12} sm={12} md={12} className="buttonsDetail" >
							   	<Col xs={12} sm={12} md={4} mdPush={1} className="col-boot" >
							   		<Button className="btn-danger returnBook" onClick={this.props.onReturnButtonUser.bind(this)}>Return</Button>
							   	</Col>
							   	<Col  xs={12} sm={12} md={4} mdPush={2} className="col-boot" >
							   		<Button type="submit" className="btn-success returnBook">Continue</Button>
							   	</Col>	  
						   	</Col>
					   	</div>
					</form>
				</Col>
			</Grid>
	    );
	}
}

